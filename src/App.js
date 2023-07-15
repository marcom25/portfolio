import { Container, Row } from "react-bootstrap";

import AboutMe from "./pages/AboutMe/AboutMe";
import Background from "./components/Background/Background";
import Footer from "./components/layouts/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyNavbar from "./components/layouts/Navbar/MyNavbar";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import { Route } from "react-router-dom";

function App() {
  return (
    <Container fluid className="main-container">
      <Row>
        <MyNavbar />
        <Background />
        <Route path="/" element={<LandingPage/>}/>
        <Route path="about-me" element={<AboutMe/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Footer/>
      </Row>
    </Container>
  );
}

export default App;

