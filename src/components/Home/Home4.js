import React from "react";
import "./Home4.css";
import { FaBriefcase, FaTrophy, FaGraduationCap } from "react-icons/fa";

const Home3 = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          I'm a <strong>software developer</strong> passionate about building impactful tech and exploring how 
          <strong> AI is transforming industries</strong> and everyday life. I thrive on 
          <strong> problem-solving</strong>—whether it's designing scalable systems or diving deep into data. 
          I love turning ideas into <strong>solutions that matter</strong>. Beyond the keyboard, I'm also a 
          <strong> hands-on creative</strong> and a <strong>wellness enthusiast</strong> with a strong entrepreneurial spirit.
        </p>
      </div>

      {/* Stats Cards - now in one row */}
      <div className="stats-row">
        <div className="stat-card">
          <FaBriefcase className="stat-icon" />
          <h3>3+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <h3>12+</h3>
          <p>Projects</p>
        </div>
        <div className="stat-card">
          <FaGraduationCap className="stat-icon" />
          <h3>MS in CS</h3>
          <p>UT Arlington</p>
        </div>
      </div>
    </div>
  );
};

export default Home3;



