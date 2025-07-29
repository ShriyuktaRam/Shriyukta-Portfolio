import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./FitnessSection.css";

// Replace these imports with your actual image paths
import strengthClass from "../../Assets/fitness/f1.jpg";
import xplosionClass from "../../Assets/fitness/f2.jpg";
import texfitImg from "../../Assets/fitness/texfit.jpg";
import texfitImg2 from "../../Assets/fitness/texfit2.png";
import marketing from "../../Assets/fitness/market.jpg";
import homecomingImg from "../../Assets/fitness/award.jpeg";

import act1 from "../../Assets/fitness/a1.png";
import act2 from "../../Assets/fitness/a2.png";
import act3 from "../../Assets/fitness/a3.jpg";
import act4 from "../../Assets/fitness/a4.jpeg";
import act5 from "../../Assets/fitness/a5.jpeg";
import act6 from "../../Assets/fitness/a6.png";
import act7 from "../../Assets/fitness/a7.png";
import act8 from "../../Assets/fitness/a8.png";

// Collage images (10 images)
import india1 from "../../Assets/fitness/d1.jpg";
import india2 from "../../Assets/fitness/run1.jpeg";
import india3 from "../../Assets/fitness/d3.jpg";
import india4 from "../../Assets/fitness/d4.jpg";
import india5 from "../../Assets/fitness/d5.jpg";
import india6 from "../../Assets/fitness/d6.jpg";

import indianFlag from "../../Assets/fitness/india-flag.png";

function FitnessSection() {
  return (
    <Container fluid className="fitness-section">
     {/* Fitness Instructor Experience */}
<div className="fitness-header">
 {/*<h2 className="fitness-title gradient-text">Fitness Instructor Experience</h2> 
  <strong className="purple">Experience </strong> */}
  <h2 className="project-heading">Fitness Instructor <strong className="purple">Experience </strong> </h2>
  
  <p style={{ color: "black" }}>
    I worked as a certified Group Fitness Instructor and Student Marketing Assistant at 
    <b> The University of Texas at Arlington</b>, leading high-energy group classes 
    and promoting fitness programs campus-wide.
  </p>
</div>


<section className="fitness-highlight">
  <div className="highlight-card">
    <div className="image-container">
      <img src={strengthClass} alt="Fitness Instructor" />
      <div className="overlay">
        <h4>Group Fitness Instructor</h4>
        <p>
          Led Strength & Conditioning and Xplosion Xpress HIIT classes, motivating 
          students to achieve their wellness goals in a supportive, energetic environment.
        </p>
      </div>
    </div>
  </div>

  <div className="highlight-card">
    <div className="image-container">
      <img src={xplosionClass} alt="Xplosion Xpress Format" />
      <div className="overlay">
        <h4>Xplosion Xpress : HIIT Format</h4>
        <p>
          Delivered fast-paced, high-intensity interval training focused on building 
          endurance, mobility, and overall performance.
        </p>
      </div>
    </div>
  </div>

  <div className="highlight-card">
    <div className="image-container">
      <img src={marketing} alt="Group Exercise Marketing" />
      <div className="overlay">
        <h4>Student Marketing Assistant</h4>
        <p>
          Promoted group exercise programs through outreach events and campaigns, 
          boosting class attendance and program visibility on campus.
        </p>
      </div>
    </div>
  </div>
</section>

{/*
     {/* Achievements *
<div className="achievements-section">
  {/* <h3 className="fitness-subtitle fitness-title gradient-text">Achievements</h3> 
  <h2 className="project-heading"> Achievements </h2>
  <div className="achievements-grid">
    <div className="achievement-left">
      <div className="achievement-card small-card">
        <img src={texfitImg} alt="TexFit Austin - 1" />
      </div>
      <div className="achievement-card small-card">
        <img src={texfitImg2} alt="TexFit Austin - 2" />
      </div>
      <p className="achievement-text">
        Represented my university at TexFit Conference at UT Austin
      </p>
    </div>
    <div className="achievement-card big-card">
      <img src={homecomingImg} alt="Homecoming 5K" />
      <p className="achievement-text">
        Won Spirit Award during Homecoming 5K
      </p>
    </div>
  </div>
</div> */}

            {/* Activities Block */}
      <div className="activities-section">
      {/*<h3 className="fitness-subtitle fitness-title gradient-text">
  Barbells are my BFFs & I love monkeying around! </h3>
  <p className="fitness-desc gradient-subtext"> Whether it’s CrossFit, Olympic weightlifting, or any challenge that pushes me.
  I’m always up for it. </p> */}


  <h2 className="project-heading"> 
     <strong className="purple">Pushing Limits,</strong> On the Barbell & Beyond </h2>
  <p style={{ color: "black" }}> Whether it’s refining an algorithm or chasing a personal record on the lifting platform, I love taking on challenges that push me outside my comfort zone. 
    <br />Olympic weightlifting, CrossFit, and endurance races fuel my competitive spirit and keep me grounded and disciplined.
 </p>


        <div className="masonry-activities">
          <div className="activity-card tall"><img src={india3} alt="yoga" /><p>Devil's Circuit Competition</p></div>
          <div className="activity-card"><img src={act2} alt="snatch" /><p>Olympic Weightlifting - Snatch</p></div>
          <div className="activity-card"><img src={act3} alt="snatch" /><p>Crossfit - Rope Climbing</p></div>
          <div className="activity-card"><img src={act5} alt="tire" /><p>Olympic Weightlifting - Clean & Jerk</p></div>
          <div className="activity-card tall"><img src={india1} alt="sled" /><p>5km Obstacle Race</p></div>
          <div className="activity-card"><img src={act7} alt="squat" /><p>Sled Pull (250lb)</p></div>
  <div className="activity-card"><img src={india2} alt="bosuball" /><p>Irving Marathon</p></div>
  <div className="activity-card"><img src={act6} alt="snatch" /><p>Crossfit - Tire Fip</p></div>
      </div>
      </div>

       {/* Fitness Journey in India 
       <div className="indiaact-section">
    
<h2 className="project-heading">
        Fueled by <strong className="purple">Competition </strong>, Driven by <strong className="purple">Passion </strong>
      </h2>
      <p style={{ color: "black" }}>
  I love testing my limits through competitive events.<br />
  From conquering the <b>Maruti Suzuki Devils Circuit</b> – a 5 km obstacle race 
  with 15 challenging hurdles<br />
  to pushing myself at the <b>NoBull CrossFit Games Open 2023</b>, where I ranked 
  <b> 37th in my category in India</b>,<br />
  every event is a chance to grow stronger.<br />
  I’ve also participated in marathons and endurance races, celebrating the spirit of 
  fitness and community at every finish line.
      </p> 

      <div className="india-collage">
        {[india4, india1, india2, india3].map((img, index) => (
          <div key={index} className="collage-item">
            <img src={img} alt={`india-${index}`} />
          </div>
        ))}
      </div>
    </div> */}

    </Container>
  );
}

export default FitnessSection;