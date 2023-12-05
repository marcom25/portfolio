import bgImage from "../../assets/images/bg-image.jpg";

const Background = ({children}) => {

  return (
    <>
      <div className="bg-wrapper">
        {children}
      </div>
    </>
  );
};

export default Background;
