import siglo21 from "../../assets/images/siglo-21.jpg";

const AcademicHistory = () => {
  return (
    <ul className="timeline-with-icons">
      <li className="timeline-item mb-5">
        <span className="timeline-icon">
          <img
            className="mw-100 object-fit-contain rounded-circle"
            src={siglo21}
            alt="siglo-logo"
          />
        </span>

        <h5 className="fw-bold text-dark-color capri-font">Universidad Empresarial Siglo21</h5>
        <p className=" mb-2 fw-bold shippo-font">Software Engineering | 2021 - Now </p>
        <p className="">
          Currently on my 4th year (29/39 approved subjects)
        </p>
      </li>
      <li className="timeline-item mb-5">
        <span className="timeline-icon ">
          <img
            className="mw-100 object-fit-contain rounded-circle"
            src={siglo21}
            alt="siglo-logo"
          />
        </span>

        <h5 className="fw-bold text-dark-color capri-font">Universidad Empresarial Siglo21</h5>
        <p className=" mb-2 fw-bold shippo-font">Software Analyst | 2021 - 2023</p>
        <p className="">
          
        </p>
      </li>
    </ul>
  );
};

export default AcademicHistory;
