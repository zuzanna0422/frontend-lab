import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarMenuApp() {
  return (
    <Navbar bg="light" expand="md" className="border-bottom">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Moja Aplikacja</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/lab01">Laboratorium 1</Nav.Link>
            <Nav.Link as={NavLink} to="/lab02">Laboratorium 2</Nav.Link>
            <Nav.Link as={NavLink} to="/home">O aplikacji</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenuApp;
