import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ObjectDetection from "../../Assets/Projects/ObjectDetection.jpg";
import Chatbot from "../../Assets/Projects/Chatbot.jpg";
import Musiqi from "../../Assets/Projects/Musiqi.jpg";
import LearnSketch from "../../Assets/Projects/LearnSketch.jpg";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ObjectDetection}
              isBlog={false}
              title="Real-Time Object Detection System"
              description="This project uses AI-powered object detection to identify and highlight objects in images and videos in real time. It processes visual data, enhances accuracy using the YOLOv5 model, and tracks performance using TensorBoard, making it useful for applications like security surveillance and autonomous vehicles. 🚀"
              ghLink="https://github.com/ritikaghanti/Real-Time-Object-Detection-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatbot}
              isBlog={false}
              title="Neural Chatbot"
              description="This project is a smart chatbot that can answer questions with 95% accuracy based on any uploaded document. It uses AI-powered search techniques to quickly find relevant information, making responses faster and more precise. By integrating LangChain, BGE Embeddings, and Chroma DB, it improves efficiency and reduces query processing time by 30%."
              ghLink="https://github.com/ritikaghanti/ritikaghanti-RAG-Chatbot-using-Intel-s-Neural-Chat-LLM"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Musiqi}
              isBlog={false}
              title="Musiqi"
              description="Musiqi is a web app that lets users search for and stream music using the Shazam API. It provides an up-to-date music library with a smooth user experience, thanks to an optimized Node.js backend. Automated testing with Selenium helped reduce bugs and improve app stability."
              ghLink="https://github.com/ritikaghanti/Musiqi"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnSketch}
              isBlog={false}
              title="LearnSketch"
              description="LearnSketch is a mobile app that helps artists improve their drawings using image recognition technology. It detects differences between an artist's sketch and a reference image, providing feedback to minimize errors. The app also includes beginner-friendly drawing tutorials and a feature that rates sketch accuracy by comparing it to an original image. Optimized for speed, it loads 40% faster, ensuring a smooth user experience."
              ghLink="https://github.com/ritikaghanti/LearnSketch"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
