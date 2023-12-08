import { Navbar, Nav, Col, Row } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar className="px-5 justify-content-between">
      <Row>
        <Col className="container-name">
          <a href="#landing" className="navbar-brand name-tag moli-font">
            Marco Mignacco
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="container-link">
          <Nav>
            <Nav.Item>
              <a href="#about-me" className="nav-link link-tag capri-font">
                About Me
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="#skills" className="nav-link link-tag capri-font">
                Skills
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="#projects" className="nav-link link-tag capri-font">
                Projects
              </a>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
};
export default MyNavbar;
