import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [role, setRole] = useState("citizen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would have authentication logic here.
    // For this demo, we'll just log the credentials and redirect based on role.
    console.log("Logging in as:", role);
    console.log("Email/ID:", email, "Password:", password);

    // Redirect to the appropriate dashboard after login
    if (role === 'official' || role === 'governance') {
      navigate("/dashboard");
    } else if (role === 'asha' || role === 'volunteer') {
      navigate("/casemanagement");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="role">Select Your Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="official">District Health Official</option>
            <option value="governance">Local Governance Body</option>
            <option value="asha">ASHA Worker</option>
            <option value="volunteer">Community Volunteer</option>
            <option value="citizen">Citizen/User</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email or Official ID</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email or ID"
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
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;