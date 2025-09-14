import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // Navigate to a search results page or handle search logic
      console.log("Search for:", searchQuery);
      setSearchQuery("");
    }
  };

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
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/awareness" onClick={() => setMenuOpen(false)}>Awareness</Link>
        </li>
        <li>
          <Link to="/report" onClick={() => setMenuOpen(false)}>Report</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search disease, village..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      {/* CTA Button */}
      <Link to="/report" className="btn-report" onClick={() => setMenuOpen(false)}>
        Report Case
      </Link>

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
