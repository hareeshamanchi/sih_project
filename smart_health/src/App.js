import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Report from "./components/Report";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Awareness from "./components/Awareness";
import Monitoring from "./components/Monitoring";
import CaseManagement from "./components/CaseManagement";
import CaseDetail from "./components/CaseDetail";
import Predictions from './components/Predictions'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/casemanagement" element={<CaseManagement />} />
          <Route path="/case/:caseId" element={<CaseDetail />} />
          
          {/* Add the new route for the predictions page */}
          <Route path="/predictions" element={<Predictions />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;