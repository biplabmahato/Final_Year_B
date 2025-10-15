# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Load ML model + scaler
model = joblib.load("ids_model.pkl")
scaler = joblib.load("scaler.pkl")

# (Optional) In-memory storage for alerts
alerts = []

@app.route("/")
def home():
    return jsonify({"message": "Intrusion Detection System API is running."})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json.get("features", [])
        if not data:
            return jsonify({"error": "No features provided"}), 400

        features = np.array(data).reshape(1, -1)
        features_scaled = scaler.transform(features)

        prediction = model.predict(features_scaled)[0]
        prob = model.predict_proba(features_scaled)[0][1]

        result = {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "prediction": int(prediction),
            "probability": round(float(prob), 4),
            "message": "🚨 Attack Detected" if prediction == 1 else "✅ Normal Traffic"
        }

        # Store alert
        alerts.append(result)

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/alerts", methods=["GET"])
def get_alerts():
    """Return list of previous detections"""
    return jsonify(alerts)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
