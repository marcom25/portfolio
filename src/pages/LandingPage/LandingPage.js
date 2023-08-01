import Type from "../../components/Typewriter/Type";
import { ReactComponent as IMAGE } from "../../assets/images/intro-image.svg";
import { Container, Row, Col, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid>
      <Row className="container-landing">
        <Col className="text-col-lan">
          <h1 className="text-light main-title shippori-font">
            Hi! I'm <span className="name moli-font">Marco Mignacco </span>
            <span className="wave">👋</span>
          </h1>
          <p className="text-intro capri-font">
            <Type />
          </p>
          <div className="contact-me">
            Contact Me: {" "}
            <a className="github-button" href="https://github.com/marcom25">Github</a>
            <a className="linkedin-button" href="https://www.linkedin.com/in/marco-mignacco-001547234/">Linkedin</a>
            <a className="mail-button" href="mailto:marcomignacco03@gmail.com">Email</a>
          </div>
        </Col>
        <Col className="img-col-lan">
          <IMAGE className="d-block landing-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
