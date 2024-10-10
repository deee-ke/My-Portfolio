import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './components.css'

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="">
      <Container className=''>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between flex-column'>
          <Nav className="d-flex gap-5 navs">
            <Nav.Link className='navlink' href="#features">Certifications</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">Specializations</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">Badges</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">Projects</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">Skills</Nav.Link>
            <Nav.Link className='navlink' href="#pricing">Contact</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar