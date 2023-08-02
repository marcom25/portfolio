import Type from "../../components/Typewriter/Type";
import { ReactComponent as IMAGE } from "../../assets/images/intro-image.svg";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";

const LandingPage = () => {
  return (
    <Container fluid>
      <Row className="container-landing">
        <Col className="text-col-lan">
          <h1 className="main-title shippo-font">
            Hi! I'm <span className="name moli-font">Marco Mignacco </span>
            <span className="wave">👋</span>
          </h1>
          <p className="text-intro capri-font">
            <Type />
          </p>
          <div className="contact-me d-flex flex-column shippo-font">
            Let's get in touch:
            <div className="d-flex mt-3 capri-font">
              <a className="github-button " href="https://github.com/marcom25">
                <BsGithub />
                Github
              </a>
              <a
                className="linkedin-button"
                href="https://www.linkedin.com/in/marco-mignacco-001547234/"
              >
                <BsLinkedin />
                Linkedin
              </a>
              <a
                className="mail-button"
                href="mailto:marcomignacco03@gmail.com"
              >
                <RiMailSendLine className="email-logo" />
                <span className="g">G</span>
                <span className="m">m</span>
                <span className="a">a</span>
                <span className="i">i</span>
                <span className="l">l</span>
              </a>
            </div>
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
