import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";
import mainImage from "../../Assets/main-image.jpg";
import { useNavigate } from "react-router-dom";




const HeroSection = () => {
  const [hovered, setHovered] = useState(null);
const navigate = useNavigate();

  return (
    <div className="hero-container">
      <motion.div className="image-wrapper" whileHover={{ scale: 1.02 }}>
        <motion.img 
          src={mainImage} 
          alt="Profile" 
          className="main-image"
          whileHover={{ x: hovered ? 10 : 0, y: hovered ? -5 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        />

        {/* LEFT Default Label */}
        {hovered !== "left" && (
          <div className="label left-default">
            <h2>Fitness Instructor & Entrepreneur</h2>
            <p className="subtext">Passionate fitness coach & small business owner</p>
          </div>
        )}

        {/* LEFT Split (only when hovered) */}
        <AnimatePresence>
          {hovered === "left" && (
            <>
              <motion.div
                key="leftTop"
                className="overlay left-top"
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-50%" }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate("/fitness")}
                style={{ cursor: "pointer" }} 
              >
                <h2>Fitness Instructor</h2>
                <p className="subtext">Helping people stay strong & healthy</p>
              </motion.div>

              <motion.div
                key="leftBottom"
                className="overlay left-bottom"
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "50%" }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate("/playground")}
                style={{ cursor: "pointer" }}
              >
                <h2>Entrepreneur</h2>
                <p className="subtext">Rangta by Yukta – Hand-painted pots & art</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* RIGHT Section (always visible) */}
        <div className="label developer-label">
          <h2>Software Developer</h2>
          <p className="subtext">Building scalable systems & APIs</p>
        </div>

        {/* Hover zones */}
        <div
          className="hover-zone left-half"
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
        />
        <div
          className="hover-zone right-half"
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
        />
      </motion.div>

  
    </div>
    
  );
};

export default HeroSection;
















