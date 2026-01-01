import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container className="px-0">
        
        <h2 className="display-4 mb-4 section-title">
          Get in Touch.
        </h2>

        <div style={{maxWidth: '800px', marginBottom: '30px'}}>
            <p className="fs-6" style={{fontFamily: 'Courier Prime, monospace', lineHeight: '1.6'}}>
              I am currently open to new opportunities. Whether you have a question or just want to say hi, 
              feel free to drop a message below!
            </p>
        </div>

        <div style={{maxWidth: '700px'}}>
            <Form action="https://formspree.io/f/maqypqav" method="POST">
              
              <Row className="g-3 mb-3">
                <Col md={6}>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        className="form-simple" 
                        required 
                    />
                </Col>
                <Col md={6}>
                    <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className="form-simple" 
                        required 
                    />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control 
                    as="textarea" 
                    name="message"
                    rows={4} 
                    placeholder="Write your message here..." 
                    className="form-simple" 
                    required 
                />
              </Form.Group>

              <Button 
                variant="dark" 
                type="submit" 
                className="rounded-0 px-4 py-2"
                style={{fontFamily: 'Courier Prime, monospace', fontSize: '0.85rem'}}
              >
                SEND MESSAGE
              </Button>
            </Form>
        </div>

        <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Eyob-Assefa. Built with React & Bootstrap.</p>
        </div>

      </Container>
    </section>
  );
}

export default Contact;