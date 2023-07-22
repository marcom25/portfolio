import { Container, Row } from "react-bootstrap";

import "./pages/AboutMe/styles.css";
import "./pages/LandingPage/styles.css";
import "./pages/Projects/styles.css";
import "./pages/Skills/styles.css";
import "./components/Background/styles.css";
import "./components/layouts/Footer/styles.css";
import "./components/layouts/Navbar/styles.css";

import Background from "./components/Background/Background";
import Footer from "./components/layouts/Footer/Footer";
import MyNavbar from "./components/layouts/Navbar/MyNavbar";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Background>
        <Container fluid className="main-container d-flex flex-column justify-content-between">
          <Row>
            <MyNavbar />
          </Row>
          <Row className="row-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="skills" element={<Skills />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </Row>
        </Container>
      </Background>
    </>
  );
}

export default App;

