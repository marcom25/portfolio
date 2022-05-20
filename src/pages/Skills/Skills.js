import { Icon } from "@iconify/react";
import { ReactComponent as CSS3} from "../../images/img1.svg";

const Skills = () => {
  return (
    <div id="skills" className="skills ">
      <h1 className="pos-skills">Skills</h1>

      <div className="row icon">
        <Icon className=" col mx-4" icon="logos:react" />
        <Icon className=" col mx-4" icon="logos:javascript" />
        <Icon className=" col mx-4" icon="logos:java" />
        <Icon className=" col mx-4" icon="logos:python" />
        <Icon className=" col mx-4" icon="logos:postman-icon" />
        <Icon className=" col mx-4" icon="logos:mysql" />
      </div>
      <div className="row icon">
        {/* <CSS3 className="icono col mx-2 mt-3" alt="css3"/> */}
        <Icon className=" col mx-2 mt-3" icon="logos:css-3"/>
        <Icon className=" col mx-2 mt-3" icon="logos:html-5" />
        <Icon className=" col mx-2 mt-3" icon="logos:express" />
        <Icon className=" col mx-2 mt-3" icon="logos:bootstrap" />
        <Icon className=" col mx-2 mt-3" icon="logos:nodejs" />
        <Icon className=" col mx-2 mt-3" icon="logos:git-icon" />
      </div>
      <div className="row icon">
        <Icon className=" col mt" icon="logos:github-icon" />
      </div>
    </div>
  );
};

export default Skills;
