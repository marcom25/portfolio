import {ReactComponent as IMAGE}  from "../../images/intro-image.svg";
import { Container, Row, Col } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container fluid className="text-center">
      <Row className="container-landing">
        <Col>
          <h1 className="text-light">Hola</h1>
          <p> odwkodakwodkowdkawo</p>
        </Col>
        <Col className="">
          <IMAGE className="d-block"/>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
