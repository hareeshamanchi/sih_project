import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Predictions.css';

// Dummy prediction data - in a real app, this would come from your backend API
const predictionData = [
  { id: 1, district: "Kamrup", village: "Hajo", disease: "Cholera", risk: "High", probability: 78, timeframe: "Next 14 days" },
  { id: 2, district: "Nalbari", village: "Belsor", disease: "Rotavirus", risk: "Medium", probability: 55, timeframe: "Next 7 days" },
  { id: 3, district: "Aizawl", village: "Sairang", disease: "Typhoid", risk: "Low", probability: 25, timeframe: "Next 30 days" },
  { id: 4, district: "East Khasi Hills", village: "Mawlynnong", disease: "Gastroenteritis", risk: "Medium", probability: 62, timeframe: "Next 14 days" },
];

const Predictions = () => {
  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'risk-high';
      case 'medium': return 'risk-medium';
      case 'low': return 'risk-low';
      default: return '';
    }
  };

  return (
    <div className="predictions-container">
      <motion.div
        className="predictions-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Disease Outbreak Predictions</h2>
        <p>AI-powered forecasts based on real-time data from IoT sensors, manual reports, and environmental factors.</p>
      </motion.div>

      <div className="predictions-grid">
        {predictionData.map((pred, index) => (
          <motion.div
            className={`prediction-card ${getRiskColor(pred.risk)}`}
            key={pred.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-header">
              <h3>{pred.village}, {pred.district}</h3>
              <span className="risk-badge">{pred.risk} Risk</span>
            </div>
            <div className="card-body">
              <p className="disease-name">{pred.disease} Outbreak</p>
              <div className="probability-bar">
                <div className="probability-fill" style={{ width: `${pred.probability}%` }}>
                  {pred.probability}%
                </div>
              </div>
              <p className="timeframe">Predicted within: <strong>{pred.timeframe}</strong></p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Predictions;