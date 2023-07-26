import { Container, Row, Col } from "react-bootstrap";
import { FaMapPin } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";

const AboutMe = () => {
  return (
    <Container>
      <Row className="about-me-row">
        <Col className="text-col-abt">
          <h1 className="text-light">About Me</h1>
          <div className="abt-description">
            <p>
              Hey there! I am <span className="name-abt">Marco Mignacco</span>
            </p>
            <div className="description-container">
              <div className="bar-abt"></div>
              <ul className="list-abt">
                <li>
                  <span className="icon-opt-abt">
                    <FaMapPin />
                  </span>
                  Living in Cordoba Argentina.
                </li>
                <li>
                  <span className="icon-opt-abt">
                    <PiStudentBold />
                  </span>
                  Currently in the third year of a software engineering major.
                </li>
                <li>
                  <span className="icon-opt-abt">
                    <AiOutlineTeam />
                  </span>
                  Experienced working on collaborative projects with teams
                  or individuals.
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="img-col-abt">
          <h1 className="text-light">Imagen</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
