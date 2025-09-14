import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Awareness from "./components/Awareness";
import Monitoring from "./components/Monitoring";
import RoleAccess from "./components/RoleAccess";
import ReportPreview from "./components/ReportPreview";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar stays visible on all pages */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/role-access" element={<RoleAccess />} />
          <Route path="/report-preview" element={<ReportPreview />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
