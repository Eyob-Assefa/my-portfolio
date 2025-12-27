import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="md" className="flex-md-column h-100 p-3">
      
      <Container fluid className="flex-md-column p-0">
        
        <Navbar.Brand href="#home" className="mb-md-4 fw-bold fs-3">
          Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="sidebar-nav" />

        <Navbar.Collapse id="sidebar-nav">
          <Nav className="flex-column w-100 mt-3 mt-md-0">
            <Nav.Link href="#projects" className="py-2">Projects</Nav.Link>
            <Nav.Link href="#about" className="py-2">About</Nav.Link>
            <Nav.Link href="#contact" className="py-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default Navigation;