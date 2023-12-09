import { Navbar, Nav, Col, Row, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="px-lg-5 justify-content-between">
      <Row>
        <Col>
          <a href="#landing" className="navbar-brand name-tag moli-font fs-3">
            Marco Mignacco
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar.Toggle
            aria-controls="offcanvas"
            className="nav-toggler live-page-button rounded-2 d-flex d-lg-none align-items-center"
          >
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvas"
            aria-labelledby="offcanvas"
            placement="top"
            className=""
          >
            <Offcanvas.Body>
              <Nav>
                <Nav.Item>
                  <a
                    href="#about-me"
                    className="nav-link link-tag capri-font fs-5"
                  >
                    About Me
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <a
                    href="#skills"
                    className="nav-link link-tag capri-font fs-5"
                  >
                    Skills
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <a
                    href="#projects"
                    className="nav-link link-tag capri-font fs-5"
                  >
                    Projects
                  </a>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Col>
      </Row>
    </Navbar>
  );
};
export default MyNavbar;
