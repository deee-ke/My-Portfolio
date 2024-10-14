
import './App.css';
import './Components/Css/Aboutme.css'
import './Components/Css/Badges.css'
import './Components/Css/Connection.css'
import './Components/Css/Footer.css'
import './Components/Css/Head.css'
import './Components/Css/mediaqueries.css'
import './Components/Css/MyCertifications.css'
import './Components/Css/MySplztn.css'
import './Components/Css/Navbar.css'
import './Components/Css/Projects.css'
import './Components/Css/Skills.css'

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
