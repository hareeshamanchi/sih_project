import React, { useState } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";
import "../styles/CaseManagement.css";

const CaseManagement = () => {
  const [role, setRole] = useState("official");
  const [filter, setFilter] = useState("all");

  const cases = [
    { id: 1, disease: "Cholera", location: "Assam", date: "2025-09-01", status: "Pending" },
    { id: 2, disease: "Typhoid", location: "Mizoram", date: "2025-09-05", status: "Reviewed" },
    { id: 3, disease: "Hepatitis A", location: "Manipur", date: "2025-09-08", status: "Resolved" },
    { id: 4, disease: "Rotavirus", location: "Assam", date: "2025-09-10", status: "Pending" },
    { id: 5, disease: "Gastroenteritis", location: "Meghalaya", date: "2025-09-11", status: "Pending" },
  ];

  const filteredCases =
    filter === "all" ? cases : cases.filter((c) => c.status === filter);

  // Chart Data
  const statusData = [
    { name: "Pending", value: cases.filter(c => c.status === "Pending").length },
    { name: "Reviewed", value: cases.filter(c => c.status === "Reviewed").length },
    { name: "Resolved", value: cases.filter(c => c.status === "Resolved").length },
  ];

  const locationData = [
    { name: "Assam", value: cases.filter(c => c.location === "Assam").length },
    { name: "Mizoram", value: cases.filter(c => c.location === "Mizoram").length },
    { name: "Manipur", value: cases.filter(c => c.location === "Manipur").length },
    { name: "Meghalaya", value: cases.filter(c => c.location === "Meghalaya").length },
  ];

  const COLORS = ["#ffdd57", "#90e0ef", "#06d6a0", "#0077b6"];

  const renderActions = (caseItem) => {
    if (role === "citizen") {
      return <span>View Only</span>;
    } else if (role === "asha") {
      return <button className="btn-update">Update</button>;
    } else if (role === "official") {
      return (
        <>
          <button className="btn-review">Review</button>
          <button className="btn-resolve">Resolve</button>
        </>
      );
    }
  };

  return (
    <div className="case-management">
      <h1>📂 Case Management</h1>
      <p>Track, review, and resolve reported waterborne disease cases with analytics.</p>

      {/* Role Switch */}
      <div className="role-switch">
        <label>Switch Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="citizen">Citizen</option>
          <option value="asha">ASHA Worker</option>
          <option value="official">Official</option>
        </select>
      </div>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("Reviewed")}>Reviewed</button>
        <button onClick={() => setFilter("Resolved")}>Resolved</button>
      </div>

      {/* Case Table */}
      <table className="case-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Disease</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>{caseItem.id}</td>
              <td>{caseItem.disease}</td>
              <td>{caseItem.location}</td>
              <td>{caseItem.date}</td>
              <td>
                <span className={`status ${caseItem.status.toLowerCase()}`}>
                  {caseItem.status}
                </span>
              </td>
              <td>{renderActions(caseItem)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Analytics Section */}
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
          <h2>Cases by Location</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={locationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0077b6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CaseManagement;
