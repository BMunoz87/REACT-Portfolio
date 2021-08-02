import React from "react";
import "../styles/styles.css";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import brian from "../components/images/brian.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Home = () => (
  <Container id="container">
    <center>
      <Row>
        <Col xs={6} md={4}>
          <Image src={brian} />
        </Col>
        <Col xs={12} md={8}>
          <p id="about">
            <h1>
              {" "}
             Hello I'm Brian Munoz. A student at the University of Texas at Austin Full Stack Development Boot Camp. 
            </h1>
          </p>
        </Col>
      </Row>
    </center>
  </Container>
);

export default Home;
