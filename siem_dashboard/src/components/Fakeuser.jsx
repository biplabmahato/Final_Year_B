import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [features, setFeatures] = useState("");
  const [result, setResult] = useState(null);
  const [alerts, setAlerts] = useState([]);

  // Fetch alerts history
  const fetchAlerts = async () => {
    const res = await axios.get("http://localhost:5000/alerts");
    setAlerts(res.data);
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", {
        features: features.split(",").map(Number),
      });
      setResult(res.data);
      fetchAlerts(); // Refresh history
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🌐 Intrusion Detection System
      </h1>

      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-6">
        <label className="block text-gray-700 mb-2">Enter Features (comma-separated):</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md mb-4"
          placeholder="12.3, 0.4, 1, 512, 0.2, 80"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Detect
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p><strong>Message:</strong> {result.message}</p>
            <p><strong>Probability:</strong> {result.probability}</p>
            <p><strong>Time:</strong> {result.timestamp}</p>
          </div>
        )}
      </div>

      {/* Alerts Table */}
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">🧾 Detection History</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Time</th>
              <th className="border p-2">Result</th>
              <th className="border p-2">Probability</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((a, idx) => (
              <tr key={idx} className={a.prediction === 1 ? "bg-red-50" : "bg-green-50"}>
                <td className="border p-2">{a.timestamp}</td>
                <td className="border p-2">{a.message}</td>
                <td className="border p-2">{a.probability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
