// src/components/RoleAccess.jsx
import React, { useState } from "react";
import "../styles/RoleAccess.css";

const RoleAccess = () => {
  const [role, setRole] = useState("patient");

  const renderContent = () => {
    switch (role) {
      case "admin":
        return (
          <div className="role-card admin">
            <span className="role-icon">🛡️</span>
            <p>🔑 Admin Dashboard: Manage users, roles, and reports.</p>
          </div>
        );
      case "doctor":
        return (
          <div className="role-card doctor">
            <span className="role-icon">👨‍⚕️</span>
            <p>📊 Doctor Panel: View patient reports and analytics.</p>
          </div>
        );
      case "patient":
      default:
        return (
          <div className="role-card patient">
            <span className="role-icon">🧑</span>
            <p>📄 Patient Portal: View your health records and reports.</p>
          </div>
        );
    }
  };

  return (
    <div className="role-access-container">
      <h2 className="role-access-title">🔒 Role-Based Access</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="role-select"
      >
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="admin">Admin</option>
      </select>

      {renderContent()}
    </div>
  );
};

export default RoleAccess;
