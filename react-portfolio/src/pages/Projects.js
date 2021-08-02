import React from "react";
import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Projects = () => (
  <center>
    <Container id="container">
      <div>
        <h1>My Projects</h1>
        <Col xs={6} md={4}>
          <h2>
            <a href="https://github.com/BMunoz87/unashamed" target="_blank">
            Unashamed
            </a>
          </h2>
        </Col>
      </div>
      <div>
        <Col xs={12} md={8}>
          <h2>
            <a
              href="https://github.com/BMunoz87/BBRM"
              target="_blank"
            >
     BBRM
            </a>
          </h2>
        </Col>
      </div>
    </Container>
  </center>
);

export default Projects;