import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Playground.css";

// Carousel images
import art1 from "../../Assets/playground/b7.jpeg";
import art2 from "../../Assets/playground/m1.jpeg";
import art3 from "../../Assets/playground/b2.jpeg";
import art4 from "../../Assets/playground/m4.jpeg";
import art5 from "../../Assets/playground/b6.jpeg";
import art6 from "../../Assets/playground/m2.jpeg";

// Fall sale images
import fallMain from "../../Assets/playground/1.jpeg";
import fallLeft1 from "../../Assets/playground/2.jpeg";
import fallLeft2 from "../../Assets/playground/3.jpeg";
import fallRight1 from "../../Assets/playground/4.jpeg";
import fallRight2 from "../../Assets/playground/5.jpeg";

// Spring sale images
import springMain from "../../Assets/playground/wtoo.jpeg";
import springLeft1 from "../../Assets/playground/p1.jpeg";
import springLeft2 from "../../Assets/playground/p2.jpeg";
import springRight1 from "../../Assets/playground/p3.jpeg";
import springRight2 from "../../Assets/playground/p4.jpeg";

// Workshop images
import workCenter1 from "../../Assets/playground/w2.jpeg";
import workCenter2 from "../../Assets/playground/w1.jpeg";
import workLeft1 from "../../Assets/playground/w4.jpeg";
import workLeft2 from "../../Assets/playground/w6.jpeg";
import workRight1 from "../../Assets/playground/w3.jpeg";
import workRight2 from "../../Assets/playground/w5.jpeg";

import rangtaLogo from "../../Assets/playground/rangtalogo.jpeg";



function Playground() {
  return (
    <Container fluid className="playground-section">
      <Container className="intro-section">
      <h1 className="playground-heading">
  My <strong className="purple">Entrepreneur </strong>Journey
</h1>
  <Row>
    <Col md={6} className="intro-text">
       <div className="logo-title">
    <img src={rangtaLogo} alt="Rangta By Yukta" className="rangta-logo" />
    <h1 className="business-name">Rangta By Yukta</h1>
  </div>
<div className="business-story">
  <p>
    <b>Rangta By Yukta</b> started as a passion project and has grown into a thriving small business,
    bringing the beauty of <b>hand-painted dot mandala art</b> into everyday life.
    I specialize in creating unique, eco-friendly products including 
    <b> planters, bookmarks, and keychains</b>, each carefully hand-painted with intricate designs 
    that symbolize mindfulness and peace.
  </p>

  <p>
    For me, <b>dot mandala art</b> is more than just a creative outlet—it’s a form of meditation 
    that improves focus, patience, and emotional balance. Through this art, I aim to bring positivity 
    and mindfulness into every product, turning ordinary objects into thoughtful gifts.
  </p>

{/*}
  <p>
    Over the past 5+ years, I have served <b>clients in 5+ countries</b>, shipping and customizing 
  handcrafted items worldwide.I also <b>conduct art workshops</b> to share the joy of dot mandala art with communities and inspire 
  others to explore their creativity. This journey continues to bring me immense happiness as 
  I connect with people around the world through art and mindfulness.
  </p> */}

  <p>
    <a href="https://www.instagram.com/rangta_by_yukta/" target="_blank">
      Check out my work or place your order by following me on Instagram!
    </a>
  </p>
</div>



    </Col>
    <Col md={6}>
      <Carousel className="art-carousel" indicators={true}>
        {[art1, art2, art3, art4, art5, art6].map((img, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block carousel-img" src={img} alt={`art-${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  </Row>
</Container>

  {/* Fall Sale Stall */}
      <Container className="stall-section">
        <h2 className="project-heading">Annual Fall Sale – <strong className="purple">Irving Heritage Center </strong></h2>
        <p className="stall-desc">
          I set up a stall at the Fall Sale in Irving Heritage Center. It was a wonderful
          experience interacting with elderly customers and feeling their enthusiasm for handmade art.
        </p>
        <div className="stall-images">
          <div className="stall-left">
            <img src={fallLeft1} alt="fall-left1" className="hover-img" />
            <img src={fallLeft2} alt="fall-left2" className="hover-img" />
          </div>
          <div className="stall-main">
            <img src={fallMain} alt="fall-main" className="hover-img" />
          </div>
          <div className="stall-right">
            <img src={fallRight1} alt="fall-right1" className="hover-img" />
            <img src={fallRight2} alt="fall-right2" className="hover-img" />
          </div>
        </div>
      </Container>
      
            {/* Workshop Section */}
<Container className="workshop-section">
  <h2 className="project-heading">Workshops & <strong className="purple">Leadership </strong></h2>
  <p className="stall-desc">
    Conducted mandala workshops at my on-campus housing – Centennial Court.
    These sessions helped peers destress during exams while discovering creativity
    through dot art. This experience improved my leadership and community engagement.
  </p>
  <div className="workshop-images">
    <div className="workshop-left">
      <img src={workLeft1} alt="work-left1" className="hover-img" />
      <img src={workLeft2} alt="work-left2" className="hover-img" />
    </div>
    <div className="workshop-main">
      <img src={workCenter1} alt="work-center1" className="hover-img big-img" />
    </div>
    <div className="workshop-right">
      <img src={workRight1} alt="work-right1" className="hover-img" />
      <img src={workRight2} alt="work-right2" className="hover-img" />
    </div>
  </div>
</Container>

      {/* Spring Sale Stall */}
      <Container className="stall-section">
        <h2 className="project-heading">Spring Sale – <strong className="purple">UTA Campus </strong></h2>
        <p className="stall-desc">
          Participated in the UTA Entrepreneur Club’s Spring Sale, showcasing eco-friendly gifts.
          Engaged with peers and promoted sustainable art and creativity on campus.
        </p>
        <div className="stall-images">
          <div className="stall-left">
            <img src={springLeft1} alt="spring-left1" className="hover-img" />
            <img src={springLeft2} alt="spring-left2" className="hover-img" />
          </div>
          <div className="stall-main">
            <img src={springMain} alt="spring-main" className="hover-img" />
          </div>
          <div className="stall-right">
            <img src={springRight1} alt="spring-right1" className="hover-img" />
            <img src={springRight2} alt="spring-right2" className="hover-img" />
          </div>
        </div>
      </Container>


    </Container>
  );
}

export default Playground;


