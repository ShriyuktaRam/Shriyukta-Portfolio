import React, { useState } from "react";
import { FaReact, FaRobot, FaCode } from "react-icons/fa";
import "./ProfessionalExperience.css";

const experiences = [
  {
    icon: <FaReact />,
    role: "Software Development Engineer",
    company: "ServiceNow",
    duration: "11/2024 - Present",
    description:
      "Engineered scalable Python (FastAPI) microservices, automated log analytics with Elasticsearch and AWS S3, and implemented RBAC-secured APIs, delivering 40% higher throughput, 30% faster workflows, and SOC 2-compliant security for enterprise IT systems.",
    tags: ["FastAPI", "AWS", "Microservices"],
  },
  {
    icon: <FaRobot />,
    role: "Software Developer",
    company: "Virtual Infotech Solution",
    duration: "08/2021 - 07/2023",
    description:
      "Designed and deployed Django REST APIs, high-accuracy Python data pipelines, and ML retention models, improving analytics speed by 35%, boosting retention rates by 18%, and reducing manual processing time by 70% for a Customer Intelligence Platform.",
    tags: ["Django REST", "Data Engineering", "Machine Learning"],
  },
  {
    icon: <FaCode />,
    role: "Junior Software Developer",
    company: "Virtual Infotech Solution",
    duration: "06/2020 - 04/2021",
    description: "Built backend automation modules, Flask APIs, and Dockerized deployments with MySQL integration, reducing administrative processing time by 20%, cutting API response times under 400ms, and streamlining release cycles with standardized CI/CD workflows.",
    tags: ["Flask", "Docker", "MySQL"],
  },
];

function ProfessionalExperience() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleIconClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300); // reset after animation
  };

  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <div
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div
            className={`timeline-icon ${
              clickedIndex === index ? "clicked" : ""
            }`}
            onClick={() => handleIconClick(index)}
          >
            {exp.icon}
          </div>
          <div className="timeline-content">
            <h3>{exp.role}</h3>
            <h5 className="company">{exp.company}</h5>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfessionalExperience;


