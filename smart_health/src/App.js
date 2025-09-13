import React from "react";
import "./styles/App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Awareness from "./components/Awareness";
import Monitoring from "./components/Monitoring";
import RoleAccess from "./components/RoleAccess";
import ReportPreview from "./components/ReportPreview";

import Dashboard from "./components/Dashboard";  // ✅ New Page

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Home / Hero Section */}
      <Home />

      {/* Awareness Section */}
      <Awareness />

      {/* Monitoring Section */}
      <Monitoring />

      {/* Role-Based Access */}
      <RoleAccess />

      {/* Report Preview */}
      <ReportPreview />

      {/* Community Forum */}
    

      {/* Case Management Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;
