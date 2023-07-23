import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Row className="about-me-row">
        <Col className="text-col-abt">
          <h1 className="text-light">About Me</h1>
          <p className="abt-description">
            Aca va a ir mi descripcion
          </p>
        </Col>
        <Col className="img-col-abt">
          <h1 className="text-light">Imagen</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
