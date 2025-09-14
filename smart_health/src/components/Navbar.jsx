import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

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

      {/* Desktop Links - Reordered for better flow */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>{t('dashboard')}</Link>
        </li>
        <li>
          <Link to="/casemanagement" onClick={() => setMenuOpen(false)}>{t('cases')}</Link>
        </li>
        <li>
          <Link to="/predictions" onClick={() => setMenuOpen(false)}>{t('predictions')}</Link>
        </li>
        <li>
          <Link to="/awareness" onClick={() => setMenuOpen(false)}>{t('awareness')}</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>{t('login')}</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <LanguageSwitcher />
        {/* CTA Button */}
        <Link to="/report" className="btn-report" onClick={() => setMenuOpen(false)}>
          {t('report_case')}
        </Link>
      </div>

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