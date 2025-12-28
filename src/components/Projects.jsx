import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for tracking sales and inventory with real-time charts.",
      technologies: ["React", "Bootstrap", "Chart.js"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 2,
      title: "Task Manager App",
      description: "A minimalist To-Do application with drag-and-drop functionality and local storage.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      demoLink: "#",
      repoLink: "#"
    },
    {
      id: 3,
      title: "Weather Widget",
      description: "Fetches live weather data using OpenWeatherMap API based on user location.",
      technologies: ["React", "API Integration"],
      demoLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container className="px-0">
        
        <h2 className="display-4 mb-5 section-title">
          My Recent Works.
        </h2>

        <Row className="g-4"> 
          {projectList.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              
              <Card className="project-card p-3">
                
                <Card.Title className="project-title">
                  {project.title}
                </Card.Title>
                
                <Card.Text className="project-desc mb-3">
                  {project.description}
                </Card.Text>

                <div className="mb-auto"> 
                   {project.technologies.slice(0,3).map((tech, index) => (
                        <Badge key={index} bg="transparent" className="tech-badge me-1 mb-1">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="mt-3 d-flex gap-2">
                    <Button 
                        variant="outline-dark" 
                        size="sm" 
                        href={project.demoLink} 
                        target="_blank"
                        className="rounded-0 flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                        style={{fontSize: '0.75rem'}}
                    >
                        <FaExternalLinkAlt /> Demo
                    </Button>
                    <Button 
                        variant="outline-dark" 
                        size="sm" 
                        href={project.repoLink} 
                        target="_blank"
                        className="rounded-0 flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                        style={{fontSize: '0.75rem'}}
                    >
                        <FaGithub /> Code
                    </Button>
                </div>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Projects;