import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  GithubFilled,
  InstagramFilled,
  HeartFilled,
  CodeOutlined,
  LaptopOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Icon } from "@iconify/react";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container id="footer-container">
          <h6>
            Designed and Developed with{" "}
            <span id="heartIcon">
              <HeartFilled />
            </span>
            by Anand
          </h6>

          <h6>Copyright © {year} Anand MS</h6>
          <Nav className="d-flex">
            <div id="socialIconsFooter">
              <a
                href="https://github.com/anandms101"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <GithubFilled />
              </a>
              <a
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
              </a>
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
                id="mailIconFooter"
              >
                <Icon icon="clarity:email-solid" />
                {/* <Icon icon="material-symbols:mail width="32" /> */}
                {/* <Icon icon="ic:baseline-email" height="24" /> */}
              </a>
              <a
                href="https://instagram.com/anand__ms"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcons"
              >
                <InstagramFilled />
              </a>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
