import { Container, Row } from "react-bootstrap";

import "./pages/AboutMe/styles.css";
import "./pages/LandingPage/styles.css";
import "./pages/Projects/styles.css";
import "./pages/Skills/styles.css";
import "./components/Background/styles.css";
import "./components/layouts/Footer/styles.css";
// import "./components/layouts/Navbar/style.css"

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
      <Container fluid className="main-container">
        <Row>
          <Background>
            <MyNavbar />
          </Background>

          <Footer />
        </Row>
      </Container>
      <Routes>
        <Route className="nav-link" path="/" element={<LandingPage />} />
        <Route className="nav-link" path="about-me" element={<AboutMe />} />
        <Route className="nav-link" path="skills" element={<Skills />} />
        <Route className="nav-link" path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

