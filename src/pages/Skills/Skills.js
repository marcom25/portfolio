import { ReactComponent as CSS3 } from "../../images/css.svg";
import { ReactComponent as REACT } from "../../images/react.svg";
import { ReactComponent as BOOTSTRAP } from "../../images/bootstrap.svg";
import { ReactComponent as EXPRESS } from "../../images/expressjs.svg";
import { ReactComponent as GIT } from "../../images/git.svg";
import { ReactComponent as GITHUB } from "../../images/github.svg";
import { ReactComponent as HTML } from "../../images/html.svg";
import { ReactComponent as JAVA } from "../../images/java.svg";
import { ReactComponent as JAVASCRIPT } from "../../images/javascript.svg";
import { ReactComponent as MYSQL } from "../../images/mysql.svg";
import { ReactComponent as NODEJS } from "../../images/nodejs.svg";
import { ReactComponent as POSTMAN } from "../../images/postman.svg";
import { ReactComponent as PYTHON } from "../../images/python.svg";
// import { Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="container-skills">
      <div className="title-div text-light">
        <h1>Skills</h1>
      </div>
      <div className="logo-1">
        <CSS3 />
      </div>
      <div className="logo-2">
        <HTML />
      </div>
      <div className="logo-3">
        <JAVASCRIPT />
      </div>
      <div className="logo-4">
        <BOOTSTRAP />
      </div>
      <div className="logo-5">
        <NODEJS />
      </div>
      <div className="logo-6">
        <EXPRESS />
      </div>
      <div className="logo-7">
        <POSTMAN />
      </div>
      <div className="logo-8">
        <REACT />
      </div>
      <div className="logo-9">
        <MYSQL />
      </div>
      <div className="logo-10">
        <GIT />
      </div>
      <div className="logo-11">
        <GITHUB />
      </div>
      <div className="logo-12">
        <JAVA />
      </div>
      <div className="logo-13">
        <PYTHON />
      </div>
    </div>
  );
};

export default Skills;
