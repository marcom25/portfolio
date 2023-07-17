import { Container, Navbar, Nav } from "react-bootstrap";

import { Link,  } from "react-router-dom";


const MyNavbar = () => {
  return (
    <Navbar data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          Marco Mignacco
        </Link>

        <Nav className="me-auto">
          <Nav.Item>
            <Link className="nav-link" to="/about-me">
              About Me
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
