import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CaseDetail.css';

// Dummy function to get case details by ID. In a real app, this would be an API call.
const getCaseById = (id) => {
  const cases = [
    { id: 1, patientName: "Ramesh P.", age: 45, gender: "Male", disease: "Cholera", state: "Assam", district: "Kamrup", village: "Hajo", date: "2025-09-01", status: "Pending", severity: "Severe", medicines: "Oral Rehydration Salts", symptoms: "Severe watery diarrhea, vomiting, dehydration.", waterSource: "River/Pond", reportedBy: "ASHA-101" },
    { id: 2, patientName: "Sunita D.", age: 32, gender: "Female", disease: "Typhoid", state: "Mizoram", district: "Aizawl", village: "Sairang", date: "2025-09-05", status: "Reviewed", severity: "Moderate", medicines: "Antibiotics", symptoms: "High fever, stomach pain, headache.", waterSource: "Well Water", reportedBy: "Volunteer-07" },
    // Add other cases from your CaseManagement component here to make them accessible
  ];
  return cases.find(c => c.id.toString() === id);
};


const CaseDetail = () => {
  const { caseId } = useParams();
  const caseDetails = getCaseById(caseId);

  if (!caseDetails) {
    return <div className="case-detail-container"><h2>Case not found.</h2></div>;
  }

  return (
    <div className="case-detail-container">
      <div className="case-detail-card">
        <div className="case-header">
          <h2>Case Details: #{caseDetails.id}</h2>
          <span className={`status-badge ${caseDetails.status.toLowerCase()}`}>{caseDetails.status}</span>
        </div>
        
        <div className="detail-section">
          <h3>Patient Information</h3>
          <div className="detail-grid">
            <p><strong>Name:</strong> {caseDetails.patientName}</p>
            <p><strong>Age:</strong> {caseDetails.age}</p>
            <p><strong>Gender:</strong> {caseDetails.gender}</p>
          </div>
        </div>

        <div className="detail-section">
          <h3>Case Information</h3>
          <div className="detail-grid">
            <p><strong>Disease:</strong> {caseDetails.disease}</p>
            <p><strong>Severity:</strong> {caseDetails.severity}</p>
            <p><strong>Reported on:</strong> {caseDetails.date}</p>
          </div>
          <p><strong>Symptoms:</strong> {caseDetails.symptoms}</p>
        </div>

        <div className="detail-section">
          <h3>Location & Source</h3>
          <div className="detail-grid">
            <p><strong>Village:</strong> {caseDetails.village}</p>
            <p><strong>District:</strong> {caseDetails.district}</p>
            <p><strong>State:</strong> {caseDetails.state}</p>
            <p><strong>Primary Water Source:</strong> {caseDetails.waterSource}</p>
          </div>
        </div>
        
        <div className="detail-section">
            <h3>Treatment & Reporting</h3>
            <p><strong>Medicines Given:</strong> {caseDetails.medicines}</p>
            <p><strong>Reported By:</strong> {caseDetails.reportedBy}</p>
        </div>

        <div className="actions-footer">
            <Link to="/casemanagement" className="back-button">Back to Case List</Link>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;