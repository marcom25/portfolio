import { Ratio } from "react-bootstrap";
import videoBg from "../../images/VideoBg.mp4";

const Background = () => {
  return (
    <>
      <video src={videoBg} autoPlay loop muted className="background"/>
    </>
  );
};

export default Background;
