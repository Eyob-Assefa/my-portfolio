import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} lg={3} className="bg-light sidebar p-0">
          <Navigation />
        </Col>

        <Col xs={12} md={8} lg={9} className="px-0"> 
          
          <Container className="p-4 p-lg-5">
      
            <Hero />

            <Projects />
            
            <Contact />

          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;