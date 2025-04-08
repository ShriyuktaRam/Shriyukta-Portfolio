
// import ProfessionalExperience from "./ProfessionalExperience";
import { Col, Row } from "react-bootstrap";
function ProfessionalExperience() {
    return(
        // <p style={{ color: "rgb(155 126 172)" }}>
        //     "It does not matter how slowly you go so long as you do not stop. Just don't give up"{" "}
        //   </p>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="professional-experience">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">➡ Research Engineer/GTA </span>
            <br />April 2024 - May 2025<br />The University of Texas at Arlington
            <br /><br />
            <span className="purple">➡ Software Developer</span>
            <br />Jan 2023 – Jun 2023<br />CodeRelix
            <br /><br />
            <span className="purple">➡ Software Engineer</span>
            <br />Jan 2022 – Aug 2022<br />Umang Technologies 
          </p>
          </Col>
          </Row>
    );
}



export default ProfessionalExperience;