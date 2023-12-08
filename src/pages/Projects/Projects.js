import { Container, Row, Card, Col } from "react-bootstrap";
import { projects } from "./projectList";

const Projects = () => {
  return (
    <Row className="bg-blur rounded-5  text-main-color flex-column gap-5">
      <Col className="d-flex gap-3 flex-column mt-5">
        <Row className="text-center justify-content-center">
          <h1 className="capri-font">Projects</h1>
        </Row>
        <Row>
          {projects.map(project => (
            <Col key={project.id}>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Projects;
