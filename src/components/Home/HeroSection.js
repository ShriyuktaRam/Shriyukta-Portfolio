import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import mainImage from "../../Assets/main-image.jpg";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    
    <div className="hero-container">
      <img src={mainImage} alt="Profile" className="hero-image" />

      {/* Left Half (Clickable) */}
      <div
        className="left-half"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => navigate("/playground")}
      >
        {/* Top half overlay */}
        <motion.div
          className="top-left"
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <h2>Fitness Instructor</h2>
          <p>Helping people stay strong & healthy</p>
        </motion.div>

        {/* Bottom half overlay */}
        <motion.div
          className="bottom-left"
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <h2>Entrepreneur</h2>
          <p>Rangta by Yukta – Hand-painted pottery & art</p>
        </motion.div>

        {/* Default text overlay (center) */}
        <motion.div
          className="left-default-text"
          animate={{ opacity: hover ? 0 : 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <h2>Fitness Instructor & Entrepreneur</h2>
          <p>Passionate fitness coach & small business owner</p>
        </motion.div>
      </div>

      {/* Right Half (Clickable) */}
      <div className="right-half-text" onClick={() => navigate("/about")}>
        <h2>Software Developer</h2>
        <p>Building scalable systems & AI's</p>
      </div>
    </div>

  );
};

export default HeroSection;















