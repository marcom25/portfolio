import { Row, Col, Nav, Tab } from "react-bootstrap";

import meImage from "../../assets/images/IMG_2898.jpeg";
import Experience from "./Experience";
import AcademicHistory from "./AcademicHistory";
const AboutMe = () => {
  return (
    <Row className="landing rounded-5 border border-3 border-ligth text-main-color flex-column gap-5">
      <Col className="d-flex gap-3 flex-column mt-5">
        <Row className="text-center">
          <Col>
            <h1 className="capri-font">About Me</h1>
          </Col>
        </Row>
        <Row className="px-4 justify-content-center">
          <Col lg={6} className="d-flex justify-content-center ">
            <p className="fs-4 mx-4">
              Hey there! I am{" "}
              <span className="name moli-font fw-bold">Marco Mignacco</span> a
              Software Analyst currently in my 4th year of my Software
              Engineering degree. Currently living in Córdoba, Argentina.
            </p>
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <img
              className="object-fit-cover rounded-circle image"
              src={meImage}
              alt="Marco Mignacco"
            />
          </Col>
        </Row>
      </Col>
      <Tab.Container defaultActiveKey="first">
        <Col>
          <Nav variant="pills" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="first" className="capri-font button-about-me">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="capri-font button-about-me">Academic History</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="d-flex justify-content-center">
          <Tab.Content className="w-50">
            <Tab.Pane eventKey="first">
              <Experience />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <AcademicHistory />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </Row>
  );
};

export default AboutMe;
