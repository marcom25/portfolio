import eSubastasLogo from "../../assets/images/esubastas-logo.jpg";
import {v4 as uuidv4} from "uuid";
import { BOOTSTRAP, HTML, CSS, ALPINEJS, TS, PYTHON, DJANGO, DOCKER, SASS, POSTGRESQL } from "../../utils/svgImports";


const experience = [
  {
    id: uuidv4(),
    enterpriseName: "Subastas Electrónicas",
    workDateDuration: "September 2023 - Now",
    workDetails: `Develop the enterprises new page collaborating with a team of seven members,
                  for this we developed the software following the SCRUM agile method
    `,
    tools: [BOOTSTRAP, SASS, TS, ALPINEJS, DJANGO, DOCKER, POSTGRESQL ]
  },
];

const Experience = () => {
  return (
    <ul className="timeline-with-icons">
      {experience.map((experience) => (
        <li className="timeline-item mb-5" key={experience.id}>
          <span className="timeline-icon">
            <img
              className="mw-100 object-fit-contain rounded-circle"
              src={eSubastasLogo}
              alt="e-subastas-logo"
            />
          </span>

          <h5 className="fw-bold text-dark-color capri-font">
            {experience.enterpriseName}
          </h5>
          <p className="mb-2 fw-bold shippo-font">{experience.workDateDuration}</p>
          <p>{experience.workDetails}</p>
          <p className="d-flex gap-2 flex-column flex-lg-row">
            <span>Technologies used:</span> 
            <span className="d-flex mw-100 gap-1 justify-content-center align-items-center">
            {experience.tools.map(tool => (
                <img key={uuidv4()} className="mw-100 experience-svg" src={tool.src} alt={tool.alt}/>
              ))}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
