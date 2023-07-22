import Type from "../../components/Typewriter/Type";
import { ReactComponent as IMAGE } from "../../images/intro-image.svg";
import { Container, Row, Col } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid className="text-center">
      <Row className="container-landing">
        <Col className="text-col">
          <h1 className="text-light main-title">
            Hi! I'm{" "}
            <span className="name">Marco Mignacco </span>
            <span className="wave">👋</span>
          </h1>
          <p className="text-intro">
            <Type />
          </p>
        </Col>
        <Col className="img-col">
          <IMAGE className="d-block landing-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
