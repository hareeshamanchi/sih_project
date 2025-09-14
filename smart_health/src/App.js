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
// Import the new components
import Login from "./components/Login";
import Register from "./components/Register";
import CaseManagement from "./components/CaseManagement";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/role-access" element={<RoleAccess />} />
          <Route path="/report-preview" element={<ReportPreview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/casemanagement" element={<CaseManagement />} />
          
          {/* Add the new routes here */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;