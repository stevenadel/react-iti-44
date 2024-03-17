import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Bonus
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterSection() {
    return (
        <footer className="bg-black text-light py-4">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div>
                            <h5 className="text-uppercase mb-3">Get in touch</h5>
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                                <span className="ms-2">email@gmail.com</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faAddressCard} size="xl" />
                                <span className="ms-2">+20 123-456-789</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="outline-light" className="text-uppercase mt-4">Contact Me</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div>
                            <span className="d-flex gap-3 my-2">
                                {/* Bonus */}
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </span>
                            <span>Copyright © 2024</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterSection;
