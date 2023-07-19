import { Container, Navbar, Nav, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar data-bs-theme="dark" className="navbar-main-container">
      <Container>
        <Col className="container-name">
          <Link className="navbar-brand" to="/">
            Marco Mignacco
          </Link>
        </Col>

        <Col >
          <Nav className="container-link">
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
        </Col>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
