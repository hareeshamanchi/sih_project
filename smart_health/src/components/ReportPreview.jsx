// src/components/ReportPreview.jsx
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import "chart.js/auto";
import "../styles/ReportPreview.css";

const ReportPreview = () => {
  // Dummy summary data
  const caseSummary = [
    { disease: "Cholera", cases: 120, state: "Assam" },
    { disease: "Typhoid", cases: 95, state: "Mizoram" },
    { disease: "Hepatitis A", cases: 75, state: "Manipur" },
    { disease: "Rotavirus", cases: 60, state: "Tripura" },
  ];

  // Pie chart data
  const pieData = {
    labels: caseSummary.map((c) => c.disease),
    datasets: [
      {
        label: "Cases",
        data: caseSummary.map((c) => c.cases),
        backgroundColor: ["#00b4d8", "#0077b6", "#90e0ef", "#023e8a"],
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: caseSummary.map((c) => c.state),
    datasets: [
      {
        label: "Reported Cases",
        data: caseSummary.map((c) => c.cases),
        backgroundColor: "#0077b6",
      },
    ],
  };

  // PDF generator
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Waterborne Disease Report", 20, 20);
    caseSummary.forEach((c, i) => {
      doc.text(
        `${i + 1}. ${c.disease} - ${c.cases} cases (${c.state})`,
        20,
        40 + i * 10
      );
    });
    doc.save("Report.pdf");
  };

  return (
    <div className="report-preview-container">
      <h2 className="report-title">📑 Report Preview</h2>

      <table className="report-table">
        <thead>
          <tr>
            <th>Disease</th>
            <th>Cases</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {caseSummary.map((c, i) => (
            <tr key={i}>
              <td>{c.disease}</td>
              <td>{c.cases}</td>
              <td>{c.state}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="charts-container">
        <div className="chart-box">
          <h3>🟠 Cases Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div className="chart-box">
          <h3>📊 State-wise Cases</h3>
          <Bar data={barData} />
        </div>
      </div>

      <button className="download-btn" onClick={generatePDF}>
        📥 Download PDF
      </button>
    </div>
  );
};

export default ReportPreview;
