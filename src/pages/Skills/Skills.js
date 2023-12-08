import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { skills } from "../../utils/svgImports";




const Skills = () => {
  return (
    <Row className="bg-blur rounded-5  text-main-color flex-column gap-5">
      <Col className="d-flex gap-3 flex-column mt-5">
        <Row className="text-center">
          <Col>
            <h1 className="capri-font">Skills</h1>
          </Col>
        </Row>
        <Row className="container-skills mb-5 gap-2" xs="auto">
          {skills.map(skill => (
            <Col className="w-50 d-flex align-items-center" key={skill.name}>
              <OverlayTrigger overlay={<Tooltip id={skill.name} className="text-uppercase bg-blur" >{skill.name}</Tooltip>}>
                <img className="mw-100" src={skill.src} alt={skill.alt}/>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;
