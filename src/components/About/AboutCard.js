import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
  With a Master’s in Computer Science from The University of Texas at Arlington—focused on Artificial Intelligence and Databases—my journey blends deep technical skills with a passion for innovation.
</p>
<p>
  It began with a Bachelor's in Electronics and Telecommunication Engineering, where I first grew curious about how real-world systems are shaped by technology. That curiosity led me to Tata Consultancy Services, where I served as an Oracle Database Engineer managing high-performance enterprise systems.
</p>
<p>
 Today, I channel that experience into building intelligent, scalable solutions that combine cloud technologies and AI. I'm currently working as a Software Developer Intern at YourPassion1st, contributing to platforms that uplift communities through tech-driven programs.
</p>





          <p style={{ color: "rgb(155 126 172)" }}>
            "If you ever get tired, learn to rest. Not to quit"{" "} -Shriyukta Ram
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
