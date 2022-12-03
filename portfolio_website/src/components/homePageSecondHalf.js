import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "/Users/anandms/Documents/portfolio-website/portfolio_website/src/Assests/ProfilePic2.jpg";
import {
  GithubFilled,
  InstagramFilled,
  HeartFilled,
  CodeOutlined,
  LaptopOutlined,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
function HomeSecond() {
  return (
    <section>
      <Container fluid className="home-sectionSecond" id="home">
        <Container className="home-contentSecond">
          <Row>
            <Col md={4}>
              <img
                src={profilePic}
                alt="ProfilePic"
                className="img-fluid"
                style={{
                  marginTop: "3%",
                  width: 200,
                  height: 200,
                  borderRadius: 200 / 2,
                }}
              />
            </Col>
            <Col md={8}>
              <h1> A little bit about myself</h1>
              <p>Consectetur consectetur id aliquip ullamco nostrud.</p>
              <p>Consectetur consectetur id aliquip ullamco nostrud.</p>
              <p>Consectetur consectetur id aliquip ullamco nostrud.</p>
              <p>Consectetur consectetur id aliquip ullamco nostrud.</p>
            </Col>
          </Row>
          <Row id="socialConnectionIconsHomePage">
            <Col md={12}>
              <h1>FIND ME ON</h1>
              <p>You can connect me on</p>
              <a
                href="https://github.com/anandms101"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <GithubFilled />
              </a>
              {/* <a
                href="https://leetcode.com/anand_ms/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <Icon icon="simple-icons:leetcode" />
              </a>
              <a
                href="https://www.hackerrank.com/anand_ms"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <Icon icon="cib:hackerrank" />
              </a> */}
              <a
                href="https://stackoverflow.com/users/12179934/anand-ms"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <Icon icon="simple-icons:stackoverflow" />
              </a>
              <a
                href="https://www.linkedin.com/in/anand-mohan-singh-345447154/"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <LinkedinFilled />
              </a>
              <a
                href="mailto: anandmohan.singh101@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <Icon icon="material-symbols:mail" />
              </a>
              <a
                href="https://instagram.com/anand__ms"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <InstagramFilled />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default HomeSecond;
