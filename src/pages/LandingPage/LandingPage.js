import Type from "../../components/Typewriter/Type";
import { ReactComponent as IMAGE } from "../../assets/images/intro-image.svg";
import { Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";

const LandingPage = () => {
  return (
    <Row className="landing rounded-5 border border-3 border-ligth">
      <Col
        lg={7}
        className="d-flex flex-column align-items-center justify-content-center mw-100"
      >
        <Row className="flex-column w-75">
          <Col>
            <h1 className="main-title shippo-font">
              Hi! I'm <span className="name moli-font">Marco Mignacco </span>
              <span className="wave">👋</span>
            </h1>
          </Col>

          <Col>
            <p className="text-intro capri-font">
              <Type />
            </p>
          </Col>

          <Col>
            {" "}
            <div className="contact-me d-flex flex-column shippo-font">
              Let's get in touch:
              <div className="d-flex mt-3 capri-font gap-2">
                <a
                  role="button"
                  className="github-button text-decoration-none px-3 py-2 rounded-2 d-flex align-items-center gap-1 fw-normal"
                  href="https://github.com/marcom25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                  Github
                </a>
                <a 
                  role="button"
                  className="linkedin-button text-decoration-none px-3 py-2 rounded-2 d-flex align-items-center gap-1 fw-normal"
                  href="https://www.linkedin.com/in/marco-mignacco-001547234/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                  Linkedin
                </a>
                <a
                  role="button"
                  className="mail-button text-decoration-none px-3 py-2 rounded-2 d-flex align-items-center gap-1 fw-normal"
                  href="mailto:marcomignacco03@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiMailSendLine className="email-logo" />
                  <span>
                    <span className="g">G</span>
                    <span className="m">m</span>
                    <span className="a">a</span>
                    <span className="i">i</span>
                    <span className="l">l</span>

                  </span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg={5}>
        <IMAGE className="d-block mw-100" />
      </Col>
    </Row>
  );
};

export default LandingPage;
