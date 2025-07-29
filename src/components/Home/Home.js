import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home4 from "./Home4";
import Type from "./Type";
import HeroSection from "./HeroSection";  // path relative to Home.js

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
               <h1 style={{ paddingBottom: 1 }} className="heading">
                Hi There!{" "}
                
                I am <strong className="main-name"> Shriyukta Ram</strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> 
              <p className="hero-tagline">
                 Whether I’m building apps, breaking a sweat, or blending colors —
                 I'm all about creating things that spark joy and purpose.
              </p>
          </Row>
        </Container>
      </Container>
   <HeroSection/>
      <Home2 />
      
    </section>

    
  );
}

export default Home;
