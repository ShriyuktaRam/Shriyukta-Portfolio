import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import HeroSection from "./HeroSection";  // path relative to Home.js
import { FaBriefcase, FaTrophy, FaGraduationCap } from "react-icons/fa";

import {
  AiFillGithub,
} from "react-icons/ai";
import { SiLeetcode, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        
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

        <Row className="social-row">
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://github.com/iiaamshriyuktaa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:shriyukta.ram21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shriyuktaram/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/*}
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/ritikaghanti/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
