import Type from "../../components/Typewriter/Type";
import { ReactComponent as IMAGE } from "../../assets/images/intro-image.svg";
import { Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";

const LandingPage = () => {
  return (
    <Row className="bg-blur rounded-5  text-main-color flex-column flex-md-row gap-5 p-5">
      <Col
        lg={6}
        className="d-flex flex-column align-items-center justify-content-center mw-100"
      >
        <Row className="flex-column w-100">
          <Col>
            <h1 className="main-title shippo-font ">
              Hi! <span className="wave">👋</span>
              <br/> 
              I'm <span className="name moli-font">Marco Mignacco </span>
              
            </h1>
          </Col>

          <Col className="d-none d-md-block">
            <div className="text-intro capri-font ">
              <Type />
            </div>
          </Col>

          <Col className="d-flex d-md-none gap-3 capri-font">
            <div className="vr text-main-color"></div>
            <div className="">
              <h3>Fullstack Developer</h3>
              <h3>Software Analyst</h3>
              <h3>Software Engineer Student</h3>

            </div>
          </Col>

          <Col>
            
            <div className="contact-me d-flex flex-column shippo-font">
              Let's get in touch:
              <div className="d-flex mt-3 capri-font gap-2 flex-column align-items-start justify-content-start flex-md-row">
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
        <IMAGE className="mw-100" />
      </Col>
    </Row>
  );
};

export default LandingPage;
