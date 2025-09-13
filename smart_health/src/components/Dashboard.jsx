import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "../styles/Dashboard.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Dummy data
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Cases Reported",
        data: [50, 70, 65, 120, 90, 140, 180],
        borderColor: "#00b4d8",
        backgroundColor: "rgba(0,180,216,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Cholera", "Typhoid", "Hepatitis A", "Gastroenteritis", "Others"],
    datasets: [
      {
        data: [30, 25, 15, 20, 10],
        backgroundColor: ["#0077b6", "#90e0ef", "#00b4d8", "#caf0f8", "#03045e"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>📊 Real-Time Dashboard</h1>

      {/* KPI Cards */}
      <div className="kpi-cards">
        <div className="kpi-card">
          <h2>🚨 1,245</h2>
          <p>Total Cases Reported</p>
        </div>
        <div className="kpi-card">
          <h2>🔴 320</h2>
          <p>Active Outbreaks</p>
        </div>
        <div className="kpi-card">
          <h2>✅ 890</h2>
          <p>Resolved Cases</p>
        </div>
        <div className="kpi-card">
          <h2>💧 35</h2>
          <p>Water Alerts</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-card">
          <h3>📈 Cases Trend</h3>
          <Line data={lineData} />
        </div>

        <div className="chart-card">
          <h3>🥧 Disease Breakdown</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Alerts Panel */}
      <div className="alerts">
        <h3>🔔 Critical Alerts</h3>
        <ul>
          <li>⚠️ Cholera spike detected in Assam (120 new cases)</li>
          <li>⚠️ Water contamination alert in Tripura</li>
          <li>⚠️ Typhoid cluster in Manipur schools</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
