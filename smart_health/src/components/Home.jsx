import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const solutions = [
  {
    title: "📱 Mobile App",
    description:
      "Enables ASHA workers and community volunteers to report symptoms, monitor water sources, and communicate via SMS or offline mode in remote areas. Multilingual support ensures inclusivity.",
    icon: "https://img.icons8.com/fluency/48/000000/smartphone.png",
  },
  {
    title: "🤖 AI Prediction Engine",
    description:
      "Detects patterns and forecasts potential outbreaks using symptoms, environmental data, and seasonal trends. Provides early alerts for preventive action.",
    icon: "https://img.icons8.com/fluency/48/000000/artificial-intelligence.png",
  },
  
  {
    title: "🚨 Real-Time Alerts",
    description:
      "Instant notifications for district health officials and local governance bodies. Enables rapid response and resource allocation.",
    icon: "https://img.icons8.com/fluency/48/000000/alert.png",
  },
  {
    title: "📚 Awareness & Education",
    description:
      "Interactive modules teach hygiene practices, disease prevention, and safe water usage. Accessible to citizens and volunteers.",
    icon: "https://img.icons8.com/fluency/48/000000/education.png",
  },
  {
    title: "🌐 Offline & Multilingual",
    description:
      "Fully functional offline data collection and reporting supporting tribal and regional languages for inclusivity.",
    icon: "https://img.icons8.com/fluency/48/000000/offline.png",
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
        <h1>🌍 Smart Health Surveillance & Early Warning</h1>
        <p>
          Detect, monitor, and prevent water-borne diseases in vulnerable communities
          using AI, real-time data collection, and community-driven reporting.
        </p>
        <a href="#form" className="cta-btn">Report a Case</a>
      </motion.section>

      {/* Solutions Section */}
      <section className="solutions">
        <h2>Our Comprehensive Solutions</h2>
        <div className="solution-cards">
          {solutions.map((sol, idx) => (
            <motion.div
              className="solution-card"
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={sol.icon} alt={sol.title} />
              <h3>{sol.title}</h3>
              <p>{sol.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Awareness Section */}
      <section className="awareness">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>🧑‍🤝‍🧑 Community Awareness</h2>
          <p>
            Educating the public on hygiene, safe water practices, and early symptom reporting
            reduces outbreaks. Multilingual campaigns empower everyone to stay safe.
          </p>
          <ul>
            <li>✔ Drink boiled or filtered water</li>
            <li>✔ Wash hands regularly</li>
            <li>✔ Proper sanitation practices</li>
            <li>✔ Early symptom reporting</li>
          </ul>
        </motion.div>
      </section>

      {/* Water Monitoring Section */}
      <section className="monitoring">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>💧 Water Monitoring & IoT Sensors</h2>
          <p>
            Real-time monitoring of water quality with low-cost sensors ensures
            timely detection of contamination and safe intervention by authorities.
          </p>
        </motion.div>
      </section>

      {/* Data Reporting Preview */}
      <section className="report-preview">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>📝 Role-Based Reporting</h2>
          <p>
            ASHA workers, citizens, and officials can report symptoms and view
            dashboards based on their role, ensuring data privacy and efficiency.
          </p>
          <a href="#form" className="cta-btn">Submit Report</a>
        </motion.div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-preview">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>📊 Dashboard for Officials</h2>
          <p>
            Visualize hotspots, track interventions, and allocate resources
            efficiently with real-time analytics.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
