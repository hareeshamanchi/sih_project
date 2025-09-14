import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Report.css';

const Report = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    village: '',
    district: '',
    state: '',
    symptoms: '',
    symptomStartDate: '',
    waterSource: 'Tap Water',
    severity: 'Mild',
    medicines: '',
    file: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Report submitted successfully! Health officials will be notified.');
    navigate('/');
  };

  return (
    <div className="report-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <h2>Submit a Health Report</h2>
        <p>Your detailed report will help health officials respond effectively.</p>

        <div className="form-section">
          <h3>Patient Information</h3>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} required />
          </div>
          <div className="input-group-row">
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <h3>Location Details</h3>
          <div className="input-group">
            <label htmlFor="village">Village / Area</label>
            <input type="text" id="village" name="village" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="district">District</label>
            <input type="text" id="district" name="district" onChange={handleChange} required />
          </div>
           <div className="input-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" onChange={handleChange} required />
          </div>
        </div>

        <div className="form-section">
          <h3>Health Information</h3>
          <div className="input-group">
            <label htmlFor="symptomStartDate">Symptom Start Date</label>
            <input type="date" id="symptomStartDate" name="symptomStartDate" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="symptoms">Describe Symptoms</label>
            <textarea id="symptoms" name="symptoms" rows="4" onChange={handleChange} required></textarea>
          </div>
           <div className="input-group">
            <label htmlFor="waterSource">Primary Water Source</label>
            <select id="waterSource" name="waterSource" value={formData.waterSource} onChange={handleChange}>
                <option>Tap Water</option>
                <option>Well Water</option>
                <option>River/Pond</option>
                <option>Packaged Water</option>
                <option>Other</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="severity">Case Severity</label>
             <select id="severity" name="severity" value={formData.severity} onChange={handleChange}>
                <option>Mild</option>
                <option>Moderate</option>
                <option>Severe</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="medicines">Medicines Given (if any)</label>
            <textarea id="medicines" name="medicines" rows="3" onChange={handleChange}></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="file">Upload Medical Report or Photo (Optional)</label>
            <input type="file" id="file" name="file" onChange={handleFileChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
  );
};

export default Report;