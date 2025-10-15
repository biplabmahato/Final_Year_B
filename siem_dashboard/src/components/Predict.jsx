import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AttackPredictor() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setPredictions(null);
    setError(null);
  };

  const onUpload = async () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/predict?model=rf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();
      setPredictions(data.predictions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Prepare chart data for predicted_attack distribution
  const getChartData = () => {
    if (!predictions) return null;

    const counts = predictions.reduce((acc, row) => {
      const attack = row.predicted_attack || 'Unknown';
      acc[attack] = (acc[attack] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          label: 'Number of Predictions',
          data: Object.values(counts),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload CSV or Excel file to predict attacks</h2>
      <input type="file" accept=".csv, .xlsx, .xls" onChange={onFileChange} />
      <button onClick={onUpload} disabled={loading}>
        {loading ? 'Predicting...' : 'Upload & Predict'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {predictions && (
        <>
          <h3>Predictions (first 50 rows)</h3>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                {Object.keys(predictions[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {predictions.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{val?.toString()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Prediction Distribution</h3>
          <div style={{ width: '70%', maxWidth: 700, height: 300 }}>
            <Bar data={getChartData()} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </>
      )}
    </div>
  );
}
