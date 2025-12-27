import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar expand="md" className="flex-md-column h-100 p-4 align-items-center">
      <Container fluid className="flex-md-column p-0 h-100 text-center">
        
        {/* --- TOP SECTION: Image & Greeting (Vertical Stack) --- */}
        <div className="d-flex flex-column align-items-center mb-md-5 w-100">
            {/* 1. Larger Image */}
            <img 
              src="https://placehold.co/100" 
              alt="Profile"
              className="rounded-circle border border-dark mb-3" // mb-3 adds space below image
              style={{width: '100px', height: '100px', objectFit: 'cover'}}
            />
            
            {/* 2. Greeting Below Image */}
            <div>
              <span className="d-block fw-bold font-serif fs-4">Hi, I'm [Name]</span>
              <small className="text-muted fst-italic">
                Building digital things.
              </small>
            </div>
        </div>

        {/* --- MIDDLE SECTION: Menu Links --- */}
        <Navbar.Toggle aria-controls="sidebar-nav" className="mb-3 border-dark rounded-0" />
        
        <Navbar.Collapse id="sidebar-nav" className="w-100">
          <Nav className="flex-column w-100 gap-3 align-items-center align-items-md-start">
            {/* Added 'w-100 text-center' to ensure clickable area is good */}
            <Nav.Link href="#about" className="text-dark w-100 border-bottom border-dark pb-1 text-center text-md-center">About Me</Nav.Link>
            <Nav.Link href="#projects" className="text-dark w-100 border-bottom border-dark pb-1 text-center text-md-center">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-dark w-100 border-bottom border-dark pb-1 text-center text-md-center">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* --- BOTTOM SECTION: Social Icons --- */}
        <div className="mt-auto d-none d-md-flex gap-4 justify-content-center w-100 pt-4">
           <a href="https://github.com" className="text-dark link-offset-2 link-underline-opacity-0 hover-opacity"><FaGithub size={22} /></a>
           <a href="https://linkedin.com" className="text-dark link-offset-2 link-underline-opacity-0 hover-opacity"><FaLinkedin size={22} /></a>
           <a href="mailto:email@example.com" className="text-dark link-offset-2 link-underline-opacity-0 hover-opacity"><FaEnvelope size={22} /></a>
        </div>

      </Container>
    </Navbar>
  );
}

export default Navigation;