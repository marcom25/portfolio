import { Row, Col,  } from "react-bootstrap";
import { projects } from "./projectList";
import { v4 as uuidv4 } from "uuid";
import { BsGithub } from "react-icons/bs";
import {FiExternalLink} from "react-icons/fi"

const Projects = () => {
  return (
    <Row className="bg-blur rounded-5  text-main-color flex-column gap-5 ">
      <Col className="d-flex gap-3 flex-column my-5 gap-5">
        <Row className="text-center justify-content-center">
          <h1 className="capri-font">Projects</h1>
        </Row>
        {projects.map((project) => (
          <Row
            className="gap-5 justify-content-center bg-card mx-1 mx-lg-5 p-3 rounded-2 p-0 overflow-hidden flex-column flex-lg-row"
            key={uuidv4()}
          >
            <Col className="p-0 d-flex align-content-center justify-content-center">
              <img
                className="project-img object-fit-contain w-100 mw-100 rounded-3"
                src={project.img}
                alt={project.alt}
              />
            </Col>
            <Col className="p-0 d-flex flex-column gap-2">
              <div className="ps-3 pt-2 d-flex flex-column gap-2">
                <h2 className="capri-font">{project.name}</h2>
                <p className="fs-5 d-flex flex-column gap-3">
                  <span>{project.description}</span>
                  <span className="d-flex gap-2 flex-column align-items-start flex-lg-row ">
                    <span>Made with:</span>
                    <span className="d-flex mw-100 gap-1 justify-content-center align-items-center">
                      {project.builtWith.map((tool) => (
                        <img
                          key={uuidv4()}
                          className="mw-100 tech-svg"
                          src={tool.src}
                          alt={tool.alt}
                        />
                      ))}
                    </span>
                  </span>
                </p>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-column flex-lg-row">
                <a
                  role="button"
                  href={project.repoLink}
                  className="github-button shippo-font text-decoration-none px-3 py-2 rounded-2 d-flex align-items-center justify-content-center gap-1 fw-normal"
                >
                  <BsGithub />
                  Check out the repo!
                </a>

                {project.pageLink && (
                  <a
                    role="button"
                    href={project.pageLink}
                    className="live-page-button shippo-font text-decoration-none px-3 py-2 rounded-2 d-flex align-items-center justify-content-center gap-1 fw-normal"
                  >
                    <FiExternalLink />
                    Visit the live page!
                  </a>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default Projects;
