import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "/Users/anandms/Documents/portfolio-website/portfolio_website/src/Assests/ProfilePic.svg";
import Type from "./type";
import homePageAvatar from "/Users/anandms/Documents/portfolio-website/portfolio_website/src/Assests/homePageAvatar.svg";
import WaveEffect from "./wave";
import Image from "react-bootstrap/Image";
import HomeSecond from "./homePageSecondHalf";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{ paddingTop: "5%" }}>
            <Col md={6} className="home-header">
              <h1>
                Hi there! <span className="wave">👋</span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Anand Mohan Singh</strong>
              </h1>
              <Type />
            </Col>

            <Col md={6}>
              {/* <img
                src={profilePic}
                alt="ProfilePic"
                className="img-fluid"
                style={{ width: 300, height: 300, borderRadius: 300 / 2 }}
              /> */}

              <img
                src={homePageAvatar}
                alt="ProfilePic"
                className="img-fluid"
                style={{ width: 600, height: 600 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeSecond />
    </section>      


  );
}

export default Home;
