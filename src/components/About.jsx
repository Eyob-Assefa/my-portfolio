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
    <section id="about" className="pt-0 py-5">
      <Container className="px-0">
        
        <h2 className="display-4 mb-4" style={{borderBottom: '2px solid black', paddingBottom: '10px', display:'inline-block'}}>
          About Me.
        </h2>

        <div className="mb-5">
            <p className="fs-5 lh-lg">
            I am a Data Science student specializing in machine learning and AI, with a solid coding background 
            in C and Python. I also enjoy building websites to showcase my work and communicate ideas in an engaging, simple way. 
            In recent years, I have held two research assistant roles. One involved working as a 
            health informatics data analyst, managing both large and small datasets. The other role included contributing 
            to the development and launch of a library chatbot and enhancing the user experience.
            </p>
        </div>

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