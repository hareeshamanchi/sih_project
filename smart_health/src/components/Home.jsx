import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import "../styles/Home.css";

const initiatives = [
  {
    title: "Mobile Application",
    description:
      "A digital platform enabling health workers and community volunteers to report symptoms, monitor water quality, and communicate effectively even in areas with limited connectivity. Multilingual support ensures accessibility across diverse regions.",
    link: "/mobile-app" // Dummy link for now
  },
  {
    title: "Predictive Analytics Engine",
    description:
      "Advanced data analysis tools identify emerging patterns, forecast potential outbreaks, and provide early warnings for proactive interventions by authorities.",
    link: "#" // Placeholder link
  },
  {
    title: "Real-Time Alerts",
    description:
      "Automated notifications to district health officials and governance bodies facilitate rapid response, resource allocation, and targeted interventions.",
    link: "#" // Placeholder link
  },
  {
    title: "Community Awareness and Education",
    description:
      "Structured programs provide citizens and volunteers with knowledge on hygiene practices, disease prevention, and safe water usage, fostering informed community engagement.",
    link: "/awareness" // Link to Awareness page
  },
  {
    title: "Offline and Multilingual Support",
    description:
      "Ensures continuous data collection and reporting in remote regions with limited connectivity, supporting multiple local languages to maximize inclusivity and coverage.",
    link: "#" // Placeholder link
  },
];

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Smart Health Surveillance and Early Warning System</h1>
        <p>
          Leveraging technology to detect, monitor, and mitigate waterborne diseases
          in vulnerable communities. The system combines real-time data collection,
          predictive analytics, and structured reporting to strengthen public health responses.
        </p>
        <Link to="/report" className="cta-btn">Submit a Report</Link>
      </motion.section>

      {/* Initiatives Section */}
      <section className="initiatives">
        <h2>Key Initiatives</h2>
        <div className="initiative-cards">
          {initiatives.map((item, idx) => (
            <motion.div
              className="initiative-card"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link} className="read-more-btn">Read More</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Engagement */}
      <section className="community-engagement">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Community Empowerment</h2>
          <p>
            The platform strengthens public awareness by providing education on
            hygiene standards, early symptom recognition, and safe water practices.
            Health workers are trained to utilize digital tools to enhance timely reporting
            and monitoring.
          </p>
          <Link to="/awareness" className="read-more-btn">Read More</Link>
        </motion.div>
      </section>

      {/* Role-Based Access */}
      <section className="role-access">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Structured Reporting and Oversight</h2>
          <p>
            Role-based access ensures that health officials receive real-time analytics,
            health workers can monitor district-level cases, and citizens can access
            information relevant to community safety. This promotes accountability
            and operational efficiency.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
