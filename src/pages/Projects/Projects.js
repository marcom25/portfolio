import { Container, Row, Card, Col } from "react-bootstrap";
import { projects } from "./projectList";

const Projects = () => {
  return (
    <Container>
      <Row className="text-center text-light justify-content-center">
        <h1>Projects</h1>
      </Row>
      <Row>
        {projects.map((project) => (
          <Col md={12} lg={4} key={project.id} className="conten-card">
            <Card className="">
              <Card.Img src={project.img} className="img" alt={project.alt} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  Built with:
                  {project.builtWith.map((i) => (
                    
                    <img src={i} className="d-inline-block svg-project" alt={project.builtWithAlt[i]} />
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
