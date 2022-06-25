import { Grid, Box } from "@mui/material";

import AboutMe from "./pages/AboutMe/AboutMe";
import Background from "./components/Background/Background";
import Footer from "./components/layouts/Footer/Footer";
import Introduction from "./pages/Introduction/Introduction";
import Navbar from "./components/layouts/Navbar/Navbar";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Grid>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Introduction />
        <Background />
      </Box>
      <Box>
        <AboutMe />
      </Box>
      <Box>
        <Projects />
      </Box>
      <Box>
        <Skills />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Grid>
  );
}

export default App;

// <Background/>
// <div className='container mw-100'>
//   <div className='row'>
//     <div className='position-fixed col p-0'>
//       <Navbar/>
//     </div>
//   </div>
//   <div className='row'>
//     <div className='col p-0'>
//      <Introduction/>
//     </div>
//   </div>
//   <div className='row'>
//     <div className='col p-0'>
//      <AboutMe/>
//     </div>
//   </div>
//   <div className='row'>
//     <div className='col p-0'>
//      <Skills/>
//     </div>
//   </div>
//   <div className='row'>
//     <div className='col p-0'>
//      <Footer/>
//     </div>
//   </div>
// </div>

