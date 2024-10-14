import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (

    

    <div>
      <Navbar collapseOnSelect expand="lg" className="">
      <Container className=''>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navtoggle'/>
        <Navbar.Collapse id="responsive-navbar-nav" /* className='d-flex justify-content-between flex-column' */>
          <Nav className="d-flex  mx-auto navs">
            <Nav.Link className='navlink' href="#mycerti">Certifications</Nav.Link>
            <Nav.Link className='navlink' href="#mysplztn">Specializations</Nav.Link>
            <Nav.Link className='navlink' href="#badgesernd">Badges</Nav.Link>
            <Nav.Link className='navlink' href="#projects">Projects</Nav.Link>
            <Nav.Link className='navlink' href="#skills">Skills</Nav.Link>
            <Nav.Link className='navlink' href="#connection">Contact</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar