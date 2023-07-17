import { Ratio } from "react-bootstrap";
import videoBg from "../../images/VideoBg.mp4";

const Background = ({children}) => {
  return (
    <>
      <div className="bg-wrapper">
        <video src={videoBg} autoPlay loop muted className="background"/>
        {children}
      </div>
    </>
  );
};

export default Background;
