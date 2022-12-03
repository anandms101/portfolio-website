import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar sticky="top"  bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Anand MS</Navbar.Brand>
          <Nav className="d-flex" >
            <Nav.Link href="/about">About me</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contactUs">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

