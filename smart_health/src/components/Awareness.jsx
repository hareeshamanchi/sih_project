import React from "react";
import { motion } from "framer-motion";
import "../styles/Awareness.css";

const diseases = [
  {
    name: "Cholera",
    cause: "Bacterium",
    symptoms: "Severe watery diarrhea, vomiting, dehydration, can be fatal if untreated.",
    states: "Mizoram",
    img: "https://img.icons8.com/fluency/96/000000/bacteria.png"
  },
  {
    name: "Typhoid Fever",
    cause: "Salmonella typhi bacteria",
    symptoms: "High fever, stomach pain, headache, weakness.",
    states: "Assam",
    img: "https://img.icons8.com/fluency/96/000000/fever.png"
  },
  {
    name: "Hepatitis A",
    cause: "Viral infection",
    symptoms: "Jaundice, fatigue, abdominal pain.",
    states: "Assam, Manipur",
    img: "https://img.icons8.com/fluency/96/000000/liver.png"
  },
  {
    name: "Gastroenteritis",
    cause: "Viruses and bacteria",
    symptoms: "Stomach cramps, diarrhea, vomiting, fever.",
    states: "Meghalaya, Assam",
    img: "https://img.icons8.com/fluency/96/000000/stomach.png"
  },
  {
    name: "Cryptosporidiosis",
    cause: "Parasite Cryptosporidium",
    symptoms: "Diarrhea, stomach cramps, nausea.",
    states: "Limited data",
    img: "https://img.icons8.com/fluency/96/000000/parasite.png"
  },
  {
    name: "Shigellosis",
    cause: "Bacterial",
    symptoms: "Bloody diarrhea, stomach cramps.",
    states: "Assam",
    img: "https://img.icons8.com/fluency/96/000000/blood-test.png"
  },
  {
    name: "E. coli Infections",
    cause: "Bacterial",
    symptoms: "Diarrhea, vomiting.",
    states: "Assam, Tripura",
    img: "https://img.icons8.com/fluency/96/000000/bacteria.png"
  },
  {
    name: "Norovirus",
    cause: "Viral infection",
    symptoms: "Nausea, vomiting, diarrhea, stomach cramps, sometimes fever.",
    states: "Sikkim, Manipur",
    img: "https://img.icons8.com/fluency/96/000000/virus.png"
  },
  {
    name: "Rotavirus",
    cause: "Viral infection",
    symptoms: "Severe diarrhea, vomiting, fever, dehydration, affects children.",
    states: "Assam",
    img: "https://img.icons8.com/fluency/96/000000/child.png"
  },
  {
    name: "Schistosomiasis",
    cause: "Parasitic infection",
    symptoms: "Itchy skin, fever, abdominal pain, blood in urine or stool.",
    states: "Not prevalent",
    img: "https://img.icons8.com/fluency/96/000000/parasite.png"
  },
  {
    name: "Guinea Worm Disease",
    cause: "Parasitic infection",
    symptoms: "Intense itching, burning pain at skin lesion site.",
    states: "Eliminated in India",
    img: "https://img.icons8.com/fluency/96/000000/parasite.png"
  },
  // Add more diseases here...
];

const Awareness = () => {
  return (
    <div className="awareness-page">
      <h2>🌊 Waterborne Disease Awareness</h2>
      <p>Learn about common waterborne diseases, their causes, symptoms, and affected states.</p>
      
      <div className="disease-cards">
        {diseases.map((disease, idx) => (
          <motion.div
            className="disease-card"
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}>
            <img src={disease.img} alt={disease.name} />
            <h3>{disease.name}</h3>
            <p><strong>Cause:</strong> {disease.cause}</p>
            <p><strong>Symptoms:</strong> {disease.symptoms}</p>
            <p><strong>States Affected:</strong> {disease.states}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awareness;
