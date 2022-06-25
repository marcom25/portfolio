import { ReactComponent as IMAGE } from "../../images/intro-image.svg";

const Introduction = () => {
  return (
    <div id="introduction" className="introduction">
      
      <div className="intro-block">
        <h1 className="intro-header">
          Hi, I'm <h1 className="name"> Marco Mignacco</h1>
        </h1>
        <p className="intro-body">
          I'm a Software Engineer student, currently on my second year of
          college, with lots of pation for technology and very motivated to
          learn new skills every day
        </p>
      </div>
      <div className="intro-image">
        <IMAGE />
      </div>
    </div>
  );
};

export default Introduction;
