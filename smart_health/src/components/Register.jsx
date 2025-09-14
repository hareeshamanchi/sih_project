import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [village, setVillage] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registering new user:", { name, email, phone, aadhar, village, role });

    // Redirect to the login page after registration
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter your 10-digit mobile number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="aadhar">Aadhar Number (Optional)</label>
          <input
            type="text"
            id="aadhar"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            placeholder="Enter your 12-digit Aadhar number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="village">Village / Area</label>
          <input
            type="text"
            id="village"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            required
            placeholder="Enter your village or locality"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Create a strong password"
          />
        </div>
        <div className="input-group">
          <label htmlFor="role">Register as</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="citizen">Citizen/User</option>
            <option value="volunteer">Community Volunteer</option>
          </select>
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;