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
        <Row className="mb-5 mx-5 gap-3 justify-content-center">
          {skills.map(skill => (
            <Col xs={2} md={2} lg={2} xl={1} className="d-flex align-items-center justify-content-center rounded-3 icons-bg " key={skill.name}>
              <OverlayTrigger overlay={<Tooltip id={skill.name} className="text-uppercase bg-blur" >{skill.name}</Tooltip>}>
                <img className="mw-100 w-75 m-3" src={skill.src} alt={skill.alt}/>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;
