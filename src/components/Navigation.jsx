import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Navigation() {
  return (
    <Navbar expand="md" className="flex-md-column h-100 p-4 align-items-center">
      <Container fluid className="flex-md-column p-0 h-100 text-center">

        <div className="d-flex flex-column align-items-center mb-md-5 w-100">
            <img 
              src="/profile_pic.jpg" 
              alt="Profile"
              className="rounded-circle border border-dark mb-3" 
              style={{width: '130px', height: '135px', objectFit: 'cover', objectPosition: 'center 20%'}}
            />
            
            <div>
              <span className="d-block fw-bold font-serif fs-4">Hi, I'm Eyob👋🏽</span>
              <small className="text-muted fst-italic">
                Currently student at Zayed University & 42 AbuDhabi
              </small>
            </div>
        </div>

        <Navbar.Toggle aria-controls="sidebar-nav" className="mb-3 border-dark rounded-0" />
        
        <Navbar.Collapse id="sidebar-nav" className="w-100">
          <Nav className="flex-column w-100 gap-3 align-items-center">
            <Nav.Link href="#about" className="nav-link-custom text-center">
                About Me
            </Nav.Link>

            <Nav.Link href="#projects" className="nav-link-custom text-center">
                Projects
            </Nav.Link>

            <Nav.Link href="#contact" className="nav-link-custom text-center">
                Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="mt-auto d-none d-md-flex gap-4 justify-content-center w-100 pt-4">
           <a href="https://github.com/Eyob-Assefa"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-dark link-offset-2 link-underline-opacity-0 hover-opacity"
            >
                <FaGithub size={22} />
            </a>
           <a href="https://www.linkedin.com/in/eyob-assefa/" 
              targe="_blank"
              rel="noopener noreferrer"
              className="text-dark link-offset-2 link-underline-opacity-0 hover-opacity"
           >
              <FaLinkedin size={22} />
            </a>
           <a href="mailto:assefaeyob21@gmail.com" 
              className="text-dark link-offset-2 link-underline-opacity-0 hover-opacity"
           >
              <FaEnvelope size={22} />
            </a>
        </div>

      </Container>
    </Navbar>
  );
}

export default Navigation;