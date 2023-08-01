import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar className="justify-content-center">
      <Container className="justify-content-between nav-container">
        <Col className="container-name">
          <Link className="navbar-brand name-tag moli-font" to="/">
            Marco Mignacco
          </Link>
        </Col>

        <Col className="container-link">
          <Nav>
            <Nav.Item>
              <Link className="nav-link link-tag capri-font" to="/about-me">
                About Me
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link link-tag capri-font" to="/skills">
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link link-tag capri-font" to="/projects">
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
