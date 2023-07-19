import { ReactComponent as IMAGE } from "../../images/intro-image.svg";
import { Container, Row, Col } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-light">Hola</h1>
        </Col>
        <Col>
          <image href={IMAGE}/>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
