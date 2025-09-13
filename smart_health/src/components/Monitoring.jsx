import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";
import "../styles/Monitoring.css";

const COLORS = ["#00b4d8", "#0077b6", "#90e0ef", "#03045e", "#ff6b6b"];

const diseaseDistribution = [
  { name: "Typhoid", value: 1200 },
  { name: "Cholera", value: 540 },
  { name: "Hepatitis A", value: 320 },
  { name: "Gastroenteritis", value: 210 },
  { name: "Rotavirus", value: 150 },
];

const stateWiseCases = [
  { state: "Assam", cases: 1200 },
  { state: "Mizoram", cases: 540 },
  { state: "Manipur", cases: 320 },
  { state: "Meghalaya", cases: 210 },
  { state: "Tripura", cases: 180 },
];

const trendData = [
  { month: "Jan", Typhoid: 400, Cholera: 200, Hepatitis: 150 },
  { month: "Feb", Typhoid: 500, Cholera: 180, Hepatitis: 130 },
  { month: "Mar", Typhoid: 600, Cholera: 250, Hepatitis: 170 },
  { month: "Apr", Typhoid: 700, Cholera: 300, Hepatitis: 200 },
  { month: "May", Typhoid: 850, Cholera: 350, Hepatitis: 250 },
];

const Monitoring = () => {
  return (
    <div className="monitoring section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        📊 Disease Monitoring Dashboard
      </motion.h2>

      <p className="section-subtitle">
        A real-time overview of waterborne diseases across states. Role-based access ensures 
        <strong> officials, workers, and citizens </strong> see data relevant to them.
      </p>

      {/* Grid Layout */}
      <div className="monitoring-charts">
        
        {/* Pie Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Disease Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diseaseDistribution}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {diseaseDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>State-wise Reported Cases</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stateWiseCases}>
              <XAxis dataKey="state" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cases" fill="#0077b6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Line Chart */}
        <motion.div
          className="chart-card full-width"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Monthly Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Typhoid" stroke="#ff6b6b" />
              <Line type="monotone" dataKey="Cholera" stroke="#00b4d8" />
              <Line type="monotone" dataKey="Hepatitis" stroke="#0077b6" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Role-based Access Section */}
      <motion.div
        className="monitoring-note"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>🔒 Role-Based Access</h3>
        <ul>
          <li><strong>Officials:</strong> Access to real-time analytics, forecasts, and full case data.</li>
          <li><strong>Health Workers:</strong> District-level dashboards and case entry forms.</li>
          <li><strong>Citizens:</strong> General awareness, safety guidelines, and state summaries.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Monitoring;
