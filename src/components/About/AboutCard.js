import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I am <span className="purple">Ritika Ghanti </span>
            from <span className="purple"> Arlington, Texas</span>
            <br />
            I am currently pursuing my Master's in Computer Science from The University of Texas at Arlington.
            <br />
            I have 1.5 years of Software Engineering internship and 1 year of Teaching Assistant experience 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It does not matter how slowly you go so long as you do not stop. Just don't give up"{" "}
          </p>
          <footer className="blockquote-footer">Ritika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
