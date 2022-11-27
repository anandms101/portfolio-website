import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "/Users/anandms/Documents/portfolio-website/portfolio_website/src/Assests/ProfilePic.jpg";
import Type from "./type";
import WaveEffect from "./wave";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{ paddingTop: "5%" }}>
            <Col md={8} className="home-header">
              <h1>Hi there! <span className="wave">👋</span></h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Anand Mohan Singh</strong>
              </h1>
              <Type />
            </Col>

            <Col md={4}>
              <img
                src={profilePic}
                alt="ProfilePic"
                className="img-fluid"
                style={{ width: 300, height: 300, borderRadius: 300 / 2 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
