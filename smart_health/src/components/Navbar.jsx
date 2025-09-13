import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="logo"
        />
        <span>SmartHealth</span>
      </div>

      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#awareness">Awareness</a></li>
        <li><a href="#form">Report</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#register">Register</a></li>
      </ul>

      {/* Search Bar */}
      <div className="search-box">
        <input type="text" placeholder="Search disease, village..." />
      </div>

      {/* CTA Button */}
      <a href="#form" className="btn-report">Report Case</a>

      {/* Hamburger for Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
