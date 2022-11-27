import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GithubFilled } from "@ant-design/icons";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer"  >
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Designed and Developed by Anand Mohan Singh</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} Anand MS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/anandms101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubFilled />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
