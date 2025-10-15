# train_model.py
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
import joblib

# ======== 1. Load dataset ========
# Replace this with your own dataset file
df = pd.read_csv("dataset.csv")  # Should contain 'Label' column

# ======== 2. Preprocess ========
# Example: encode labels (Benign=0, Malicious=1)
df['Label'] = df['Label'].apply(lambda x: 0 if x.lower() == 'benign' else 1)

X = df.drop('Label', axis=1)
y = df['Label']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ======== 3. Split dataset ========
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# ======== 4. Train model ========
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# ======== 5. Evaluate ========
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))

# ======== 6. Save model and scaler ========
joblib.dump(model, "ids_model.pkl")
joblib.dump(scaler, "scaler.pkl")

print("✅ Model and scaler saved successfully!")
