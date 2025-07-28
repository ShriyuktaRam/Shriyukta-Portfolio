import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ObjectDetection from "../../Assets/Projects/ObjectDetection.png";
import Chatbot from "../../Assets/Projects/health1.jpg";
import Musiqi from "../../Assets/Projects/gameplan.jpg";
import map from "../../Assets/Projects/mapreduce.jpg";
import rpc from "../../Assets/Projects/rpc.jpg";
import heart from "../../Assets/Projects/heart.jpg";
import suicide from "../../Assets/Projects/db.jpg";
import commit from "../../Assets/Projects/commit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ObjectDetection}
              isBlog={false}
              title="Food Recognition & Calorie Estimation"
              description="Built an AI-powered food recognition system that detects multiple food items and instantly estimates calorie content, making diet tracking effortless. Leveraged YOLOv5 for real-time detection and MobileNet for classification, trained on 13K+ images from Roboflow and Food101. Achieved 92% precision and mAP@0.5 of 0.88 with ~18 ms inference speed on GPU. Deployed as a Flask web app with real-time camera input, enabling practical use cases in smart nutrition logging, restaurant labeling, and health monitoring apps."
              //ghLink="https://github.com/ritikaghanti/Real-Time-Object-Detection-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatbot}
              isBlog={false}
              title="Smart Health Hub – Full-Stack Healthcare Web App"
              description="Developed a scalable healthcare platform with 20+ core features including appointment scheduling, e-prescriptions, personal health records, and real-time encrypted messaging. Built using React.js (frontend) and Laravel + MySQL (backend), the solution reduced appointment handling complexity by 40% and improved provider–patient communication response time by 30%, ensuring secure and efficient healthcare management. Deployed on cloud hosting for seamless accessibility and scalability."
              ghLink="https://github.com/ritikaghanti/ritikaghanti-RAG-Chatbot-using-Intel-s-Neural-Chat-LLM"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Musiqi}
              isBlog={false}
              title="GamePlan – Agile-Based Android Application"
              description="Built an Android app to streamline sports venue scheduling and community engagement, improving booking efficiency by 35% and reducing administrative workload through automated workflows. Implemented 11+ core features including secure login, event management, community forums, and real-time reservation handling. Designed with intuitive UI/UX in Android Studio, the solution showcases expertise in mobile app lifecycle management and Agile software development practices."
              ghLink="https://github.com/ritikaghanti/Musiqi"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mobile Phone Store Database – MySQL"
              description="Designed and implemented a BCNF-normalized database with 12+ relational tables ensuring data integrity. Populated the schema with 500+ synthetic records simulating real-world business data. Developed SQL queries for profit analysis, sales trends, and employee performance tracking. Applied constraints and update operations to maintain consistency and accuracy. Enabled realistic business insights through data-driven reporting and analytics."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease Prediction – Machine Learning"
              description="Built a predictive analytics model using 13 medical features and 1,025 patient records, achieving 97% accuracy with the Random Forest algorithm, outperforming KNN (87%) and SVM (86%).Applied data preprocessing and feature optimization to enhance model performance and demonstrate the potential of machine learning for early heart disease detection and highlight data-driven approaches to support preventive healthcare."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commit}
              isBlog={false}
              title="Fault-Tolerant Distributed Commit Protocol – Python"
              description="Designed and implemented a Two-Phase Commit (2PC) protocol in Python using XML-RPC, simulating 50+ controlled and random node failures to ensure data consistency across distributed systems. Integrated recovery and timeout mechanisms that improved transaction reliability by 40%, ensuring all transactions either fully commit or safely abort under failure conditions. This project highlights practical expertise in fault-tolerant distributed systems."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpc}
              isBlog={false}
              title="RPC-Based File & Computation Service – Python"
              description="Built a multi-threaded file server and computation service using Python and RPC, supporting sum calculation and array sorting with synchronous and asynchronous methods. Implemented a Dropbox-like storage system enabling real-time file synchronization between clients and server, improving file consistency and sync speed by 35%. Leveraged the rpyc library for efficient client-server communication and remote operations."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title="Matrix Multiplication Optimization – Hadoop MapReduce"
              description="Optimized parallel matrix multiplication using Hadoop MapReduce, tuning input split sizes and reducer configurations for better cluster utilization. Achieved up to 9% reduction in total execution time, with the 4 MB split size and 10 reducers delivering the best performance at 57.1 s. Demonstrated effective load balancing, improved task parallelism, resource utilization, scalable big data processing efficiency, and enhanced computational throughput."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
