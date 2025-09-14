import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";
import "../styles/CaseManagement.css";

// Initial data is now outside the component
const initialCases = [
  { id: 1, patientName: "Ramesh P.", age: 45, gender: "Male", disease: "Cholera", state: "Assam", district: "Kamrup", village: "Hajo", date: "2025-09-01", status: "Pending", severity: "Severe", medicines: "Oral Rehydration Salts" },
  { id: 2, patientName: "Sunita D.", age: 32, gender: "Female", disease: "Typhoid", state: "Mizoram", district: "Aizawl", village: "Sairang", date: "2025-09-05", status: "Reviewed", severity: "Moderate", medicines: "Antibiotics" },
  { id: 3, patientName: "Amit K.", age: 28, gender: "Male", disease: "Hepatitis A", state: "Manipur", district: "Imphal West", village: "Kwakeithel", date: "2025-09-08", status: "Resolved", severity: "Mild", medicines: "Rest and fluids" },
  { id: 4, patientName: "Priya S.", age: 5, gender: "Female", disease: "Rotavirus", state: "Assam", district: "Nalbari", village: "Belsor", date: "2025-09-10", status: "Pending", severity: "Moderate", medicines: "Zinc supplements" },
  { id: 5, patientName: "Mina T.", age: 55, gender: "Female", disease: "Gastroenteritis", state: "Meghalaya", district: "East Khasi Hills", village: "Mawlynnong", date: "2025-09-11", status: "Pending", severity: "Mild", medicines: "None" },
];

const CaseManagement = () => {
  const [role, setRole] = useState("official");
  const [filter, setFilter] = useState("all");
  const [cases, setCases] = useState(initialCases); // Use state to manage cases
  const navigate = useNavigate();

  // --- Handler Functions for Buttons ---
  const handleReviewCase = (caseId) => {
    setCases(currentCases =>
      currentCases.map(c => 
        c.id === caseId ? { ...c, status: "Reviewed" } : c
      )
    );
  };

  const handleResolveCase = (caseId) => {
    setCases(currentCases =>
      currentCases.map(c => 
        c.id === caseId ? { ...c, status: "Resolved" } : c
      )
    );
  };
  
  const filteredCases =
    filter === "all" ? cases : cases.filter((c) => c.status === filter);

  // --- Chart Data ---
  const statusData = [
    { name: "Pending", value: cases.filter(c => c.status === "Pending").length },
    { name: "Reviewed", value: cases.filter(c => c.status === "Reviewed").length },
    { name: "Resolved", value: cases.filter(c => c.status === "Resolved").length },
  ];
  
  const districtData = cases.reduce((acc, curr) => {
    const district = curr.district;
    if (!acc[district]) {
      acc[district] = { name: district, cases: 0 };
    }
    acc[district].cases += 1;
    return acc;
  }, {});
  
  const districtChartData = Object.values(districtData);

  const COLORS = ["#ffdd57", "#90e0ef", "#06d6a0", "#0077b6"];

  const handleRowClick = (caseId) => {
    navigate(`/case/${caseId}`);
  };

  const renderActions = (caseItem) => {
    if (role === "citizen") {
      return <span>View Details</span>;
    } else if (role === "asha") {
      return <button className="btn-update">Update Status</button>;
    } else if (role === "official") {
      return (
        <>
          <button className="btn-review" onClick={() => handleReviewCase(caseItem.id)} disabled={caseItem.status !== 'Pending'}>
            Review
          </button>
          <button className="btn-resolve" onClick={() => handleResolveCase(caseItem.id)} disabled={caseItem.status === 'Resolved'}>
            Resolve
          </button>
        </>
      );
    }
  };

  return (
    <div className="case-management">
      <h1>📂 Case Management</h1>
      <p>Track, review, and resolve reported waterborne disease cases with detailed analytics.</p>

      {/* Role Switch & Filters */}
      <div className="controls-container">
        <div className="role-switch">
          <label>Switch Role View: </label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="official">Health Official</option>
            <option value="asha">ASHA Worker</option>
            <option value="citizen">Citizen</option>
          </select>
        </div>
        <div className="filters">
          <button onClick={() => setFilter("all")}>All Cases</button>
          <button onClick={() => setFilter("Pending")}>Pending</button>
          <button onClick={() => setFilter("Reviewed")}>Reviewed</button>
          <button onClick={() => setFilter("Resolved")}>Resolved</button>
        </div>
      </div>

      <div className="table-container">
        <table className="case-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disease</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
              <th>Severity</th>
              <th>Medicines Given</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.map((caseItem) => (
              <tr key={caseItem.id} onClick={() => handleRowClick(caseItem.id)} className="clickable-row">
                <td>{caseItem.id}</td>
                <td>{caseItem.patientName}</td>
                <td>{caseItem.age}</td>
                <td>{caseItem.gender}</td>
                <td>{caseItem.disease}</td>
                <td>{`${caseItem.village}, ${caseItem.district}, ${caseItem.state}`}</td>
                <td>{caseItem.date}</td>
                <td>
                  <span className={`status ${caseItem.status.toLowerCase()}`}>
                    {caseItem.status}
                  </span>
                </td>
                <td>{caseItem.severity}</td>
                <td>{caseItem.medicines}</td>
                <td className="action-buttons" onClick={(e) => e.stopPropagation()}>
                    {renderActions(caseItem)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="charts">
        <div className="chart">
          <h2>Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h2>Cases by District</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="cases" fill="#0077b6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CaseManagement;