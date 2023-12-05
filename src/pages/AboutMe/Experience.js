import eSubastasLogo from "../../assets/images/esubastas-logo.jpg";
import { BOOTSTRAP, HTML, CSS, ALPINEJS, TS, PYTHON, DJANGO, DOCKER } from "../../utils/svgImports";


const experience = [
  {
    enterpriseName: "Subastas Electrónicas",
    workDateDuration: "September 2023 - Now",
    workDetails: `Develop the enterprises new page collaborating with a team of seven members,
                  to devolop this we developed the software following the SCRUM agile method
    `,
    tools: [BOOTSTRAP, HTML, CSS, TS, ALPINEJS, PYTHON, DJANGO, DOCKER ]
  },
];

const Experience = () => {
  return (
    <ul className="timeline-with-icons">
      {experience.map((experience) => (
        <li className="timeline-item mb-5">
          <span className="timeline-icon">
            <img
              className="mw-100 object-fit-contain rounded-circle"
              src={eSubastasLogo}
              alt="e-subastas-logo"
            />
          </span>

          <h5 className="fw-bold text-dark-color">
            {experience.enterpriseName}
          </h5>
          <p className="mb-2 fw-bold">{experience.workDateDuration}</p>
          <p className="">{experience.workDetails}</p>
          <p className="d-flex gap-2 flex-column flex-lg-row">
            <span>Technologies used:</span> 
            <span className="d-flex mw-100 gap-1 justify-content-center align-items-center">
            {experience.tools.map(tool => (
                <img className="mw-100 experience-svg" src={tool} alt="technologies logos"/>
              ))}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
