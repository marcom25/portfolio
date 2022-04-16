import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './css/App.css';

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
