import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import backgroundConfig from "./background-config.json";

const Background = () => {
  console.log(backgroundConfig);
  const particlesInit = async (main) => {
   

    
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={backgroundConfig}
    />
  );
};

export default Background;