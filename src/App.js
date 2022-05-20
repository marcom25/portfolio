import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';




function App() {
  return (
    <div className='container mw-100'>
      <div className='row'>
        <div className='position-fixed col p-0'>
          <Navbar/>
        </div>
      </div>
      <div className='row'>
        <div className='col p-0'>
         <Introduction/>
        </div>
      </div>
      <div className='row'>
        <div className='col p-0'>
         <AboutMe/>
        </div>
      </div>
      <div className='row'>
        <div className='col p-0'>
         <Skills/>
        </div>
      </div>
      <div className='row'>
        <div className='col p-0'>
         <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
