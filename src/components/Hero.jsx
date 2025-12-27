import React from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { SiPython, SiC, SiR, SiMysql, SiReact, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';

function Hero() {
  const skills = [
    { name: 'C', icon: <SiC /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'R', icon: <SiR /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Git', icon: <SiGit /> },
  ];

  return (
    <section id="about" className="py-5">
      <Container className="px-0">
        
        {/* 1. The Title */}
        <h2 className="display-4 mb-4" style={{borderBottom: '2px solid black', paddingBottom: '10px', display:'inline-block'}}>
          About Me.
        </h2>

        {/* 2. The Brief Paragraph (3 Sentences) */}
        <div className="mb-5" style={{maxWidth: '700px'}}>
            <p className="fs-5 lh-lg">
                I am a Data Scientist with a focus on Machine learning and AI. 
                I have a strong background programming experience in C, and Python. I enjoy developing websites,
                and have expereince with front-end web developemnt using React, and Bootstrap. 
            </p>
        </div>

        {/* 3. The Tech Stack Icons */}
        <div>
            <h5 className="mb-3 text-uppercase" style={{letterSpacing: '2px'}}>Tech Stack</h5>
            <div className="d-flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="text-center">
                        {skill.icon}
                        <div style={{fontSize: '0.8rem', marginTop: '5px'}}>{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>

      </Container>
    </section>
  );
}

export default Hero;