import React, { useState } from "react";
import { FaReact, FaRobot, FaCode } from "react-icons/fa";
import "./ProfessionalExperience.css";

const experiences = [
  {
    icon: <FaReact />,
    role: "Software Developer",
    company: "YourPassion1st",
    duration: "06/2025 - Present",
    description:
      "Designed and deployed full‑stack features for a gamified mentorship app and built LLM‑powered web scraping pipelines, leveraging Azure to deliver 40% faster APIs, 42% improved data accuracy, and support for 500+ pilot users.",
    tags: ["React Native", "Python", "Microsoft Azure"],
  },
  {
    icon: <FaRobot />,
    role: "Oracle Database Engineer",
    company: "Tata Consultancy Services",
    duration: "08/2021 - 06/2023",
    description:
      "Designed and optimized SQL queries, indexes, and PL/SQL packages, automated backup and recovery workflows using RMAN, and resolved production data issues, improving query performance by 35% and ensuring 99.99% platform uptime.",
    tags: ["Oracle", "SQL Tuning", "Shell Scripting"],
  },
  {
    icon: <FaCode />,
    role: "Full Stack Developer",
    company: "Tequed Labs",
    duration: "07/2020 - 12/2020",
    description: "Built ‘TRAVELOGRAPHY’, a full‑stack travel web app with secure user authentication and dynamic package management, reducing manual updates by 60% and onboarding 200+ pilot users.",
    tags: ["NodeJS", "PHP", "MySQL"],
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


