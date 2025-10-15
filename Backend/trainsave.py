import os
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.metrics import classification_report, accuracy_score
import joblib
import warnings
warnings.filterwarnings('ignore')

# Column names
columns = [
    'duration', 'protocol_type', 'service', 'flag', 'src_bytes', 'dst_bytes',
    'land', 'wrong_fragment', 'urgent', 'hot', 'num_failed_logins', 'logged_in',
    'num_compromised', 'root_shell', 'su_attempted', 'num_root', 'num_file_creations',
    'num_shells', 'num_access_files', 'num_outbound_cmds', 'is_host_login',
    'is_guest_login', 'count', 'srv_count', 'serror_rate', 'srv_serror_rate',
    'rerror_rate', 'srv_rerror_rate', 'same_srv_rate', 'diff_srv_rate',
    'srv_diff_host_rate', 'dst_host_count', 'dst_host_srv_count',
    'dst_host_same_srv_rate', 'dst_host_diff_srv_rate', 'dst_host_same_src_port_rate',
    'dst_host_srv_diff_host_rate', 'dst_host_serror_rate', 'dst_host_srv_serror_rate',
    'dst_host_rerror_rate', 'dst_host_srv_rerror_rate', 'attack_type', 'difficulty'
]

# Load datasets (adjust path accordingly)
train_file = r"C:\Users\Biplab Mahato\Desktop\Final2\Final_Year_B\Backend\KDDTrain+.txt"
test_file = r"C:\Users\Biplab Mahato\Desktop\Final2\Final_Year_B\Backend\KDDTest+.txt"

print("Loading data...")
df_train = pd.read_csv(train_file, names=columns)
df_test = pd.read_csv(test_file, names=columns)

# Mapping attack types to categories
attack_mapping = {
    'normal': 'Normal',
    'back': 'DoS', 'land': 'DoS', 'neptune': 'DoS', 'pod': 'DoS',
    'smurf': 'DoS', 'teardrop': 'DoS', 'mailbomb': 'DoS', 'apache2': 'DoS',
    'processtable': 'DoS', 'udpstorm': 'DoS', 'worm': 'DoS',
    'ipsweep': 'Probe', 'nmap': 'Probe', 'portsweep': 'Probe',
    'satan': 'Probe', 'mscan': 'Probe', 'saint': 'Probe',
    'ftp_write': 'R2L', 'guess_passwd': 'R2L', 'imap': 'R2L',
    'multihop': 'R2L', 'phf': 'R2L', 'spy': 'R2L', 'warezclient': 'R2L',
    'warezmaster': 'R2L', 'sendmail': 'R2L', 'named': 'R2L',
    'snmpgetattack': 'R2L', 'snmpguess': 'R2L', 'xlock': 'R2L',
    'xsnoop': 'R2L', 'httptunnel': 'R2L',
    'buffer_overflow': 'U2R', 'loadmodule': 'U2R', 'perl': 'U2R',
    'rootkit': 'U2R', 'ps': 'U2R', 'sqlattack': 'U2R', 'xterm': 'U2R'
}

df_train['attack_category'] = df_train['attack_type'].map(attack_mapping)
df_test['attack_category'] = df_test['attack_type'].map(attack_mapping)
df_train['attack_category'].fillna('Unknown', inplace=True)
df_test['attack_category'].fillna('Unknown', inplace=True)

# Encode categorical features with safe transform
cat_features = ['protocol_type', 'service', 'flag']
label_encoders = {}

def safe_label_encode(col_train, col_test, column_name):
    combined = pd.concat([col_train, col_test], axis=0)
    le = LabelEncoder()
    le.fit(combined)

    def transform_with_safe(x):
        try:
            return le.transform([x])[0]
        except:
            return -1

    return col_train.apply(transform_with_safe), col_test.apply(transform_with_safe), le

for col in cat_features:
    df_train[col], df_test[col], le = safe_label_encode(df_train[col], df_test[col], col)
    label_encoders[col] = le

# Encode target variable
target_encoder = LabelEncoder()
df_train['label'] = target_encoder.fit_transform(df_train['attack_category'])
df_test['label'] = target_encoder.transform(df_test['attack_category'])

# Prepare features and labels
feature_columns = [col for col in columns if col not in ['attack_type', 'difficulty']]
X_train = df_train[feature_columns]
y_train = df_train['label']
X_test = df_test[feature_columns]
y_test = df_test['label']

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train Random Forest
rf_model = RandomForestClassifier(n_estimators=100, max_depth=20, random_state=42, n_jobs=-1)
rf_model.fit(X_train_scaled, y_train)

# Train XGBoost
xgb_model = XGBClassifier(n_estimators=100, max_depth=10, learning_rate=0.1,
                          objective='multi:softmax', num_class=len(target_encoder.classes_),
                          random_state=42, n_jobs=-1, eval_metric='mlogloss')
xgb_model.fit(X_train_scaled, y_train)

# Evaluate models
def evaluate_model(model, X_test_scaled, y_test):
    preds = model.predict(X_test_scaled)
    acc = accuracy_score(y_test, preds)
    print(f"Accuracy: {acc*100:.2f}%")
    print("Classification Report:")
    print(classification_report(y_test, preds, target_names=target_encoder.classes_))

print("Random Forest Results:")
evaluate_model(rf_model, X_test_scaled, y_test)

print("XGBoost Results:")
evaluate_model(xgb_model, X_test_scaled, y_test)

# Save models and preprocessors
os.makedirs('models', exist_ok=True)
import joblib
joblib.dump(rf_model, 'models/rf_model.pkl')
joblib.dump(xgb_model, 'models/xgb_model.pkl')
joblib.dump(scaler, 'models/scaler.pkl')
joblib.dump(label_encoders, 'models/label_encoders.pkl')
joblib.dump(target_encoder, 'models/target_encoder.pkl')

print("Models and preprocessing artifacts saved successfully.")
