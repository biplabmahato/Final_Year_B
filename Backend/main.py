from fastapi import FastAPI, File, UploadFile, HTTPException
import pandas as pd
import joblib
import os
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="NSL-KDD Attack Prediction API")

# Allow CORS from all origins (modify as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load models and artifacts once at startup
model_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'models')

rf_model = joblib.load(os.path.join(model_dir, 'rf_model.pkl'))
xgb_model = joblib.load(os.path.join(model_dir, 'xgb_model.pkl'))
scaler = joblib.load(os.path.join(model_dir, 'scaler.pkl'))
label_encoders = joblib.load(os.path.join(model_dir, 'label_encoders.pkl'))
target_encoder = joblib.load(os.path.join(model_dir, 'target_encoder.pkl'))

feature_columns = [
    'duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes',
    'land', 'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in',
    'num_compromised', 'root_shell', 'su_attempted', 'num_root', 'num_file_creations',
    'num_shells', 'num_access_files', 'num_outbound_cmds', 'is_host_login',
    'is_guest_login', 'count', 'srv_count', 'serror_rate', 'srv_serror_rate',
    'rerror_rate', 'srv_rerror_rate', 'same_srv_rate', 'diff_srv_rate',
    'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
    'dst_host_same_srv_rate', 'dst_host_diff_srv_rate', 'dst_host_same_src_port_rate',
    'dst_host_srv_diff_host_rate', 'dst_host_serror_rate', 'dst_host_srv_serror_rate',
    'dst_host_rerror_rate', 'dst_host_srv_rerror_rate'
]


def preprocess(df: pd.DataFrame) -> pd.DataFrame:
    for col, le in label_encoders.items():
        if col in df.columns:
            df[col] = df[col].apply(lambda x: le.transform([x])[0] if x in le.classes_ else -1)
    X = df[feature_columns].values
    X_scaled = scaler.transform(X)
    return X_scaled


@app.post("/predict")
async def predict(file: UploadFile = File(...), model_name: str = "rf"):
    contents = await file.read()
    
    # Load uploaded file into dataframe
    try:
        if file.filename.endswith(".csv"):
            df = pd.read_csv(pd.io.common.BytesIO(contents))
        elif file.filename.endswith((".xls", ".xlsx")):
            df = pd.read_excel(pd.io.common.BytesIO(contents))
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    # Check columns
    missing_cols = [c for c in feature_columns if c not in df.columns]
    if missing_cols:
        raise HTTPException(status_code=400, detail=f"Missing columns: {missing_cols}")

    # Preprocess inputs
    X_processed = preprocess(df)

    # Load model based on query param
    model = xgb_model if model_name.lower() == "xgb" else rf_model

    # Predict and inverse-transform
    preds_encoded = model.predict(X_processed)
    preds = target_encoder.inverse_transform(preds_encoded)
    df['predicted_attack'] = preds

    return {"predictions": df.head(50).to_dict(orient="records")}
