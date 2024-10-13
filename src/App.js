import './App.css';
import Aboutme from './Components/Aboutme';
import BadgesErnd from './Components/BadgesErnd';
import Connection from './Components/Connection';
import Footer from './Components/Footer';
import Head from './Components/Head';
import MyCertifications from './Components/MyCertifications';
import MySplztn from './Components/MySplztn';
import NavBar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <div className='container'>
        <NavBar/>
        <Head/>
        <Aboutme/>
        <MyCertifications/>
        <MySplztn/>
        <BadgesErnd/>
        <Projects/>
        <Skills/>
        <Connection/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
