import Typewriter from "typewriter-effect";

const options = {
    strings: [
        "Fullstack Developer",
        "Software Engineer Student"
    ],
    autoStart: true,
    loop: true,
    deleteSpeed:50
}

const Type = () => {
  return <Typewriter 
    options={options}
  
  />;
};

export default Type;
