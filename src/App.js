import { Container, Row, Col } from "react-bootstrap";

// import "./pages/AboutMe/styles.css";
// import "./pages/LandingPage/styles.css";
// import "./pages/Projects/styles.css";
// import "./pages/Skills/styles.css";
// import "./components/Background/styles.css";
// import "./components/layouts/Footer/styles.css";
// import "./components/layouts/Navbar/styles.css";

import Background from "./components/Background/Background";
import MyNavbar from "./components/layouts/Navbar/MyNavbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Background>
        <Container fluid className="d-flex flex-column gap-4">
          <Row className="nav-container sticky-top">
            <Col>
              <MyNavbar />
            </Col>
          </Row>

          <Row id="landing" className="mx-5">
            <Col>
              <LandingPage />
            </Col>
          </Row>

          <Row id="about-me" className="mx-5">
            <Col>
              <AboutMe />
            </Col>
          </Row>

          <Row id="skills" className="mx-5">
            <Col>
              <Skills />
            </Col>
          </Row>

          <Row id="projects" className="mx-5">
            <Col>
              <Projects />
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  );
}

export default App;

