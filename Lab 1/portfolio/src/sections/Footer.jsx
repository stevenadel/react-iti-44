import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Bonus
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterSection() {
    return (
        <footer className="bg-black text-light pb-4 pt-3">
            <Container>
                <Row className="justify-content-around align-items-center">
                    <Col>
                        <div>
                            <h5 className="text-uppercase mb-3">Get in touch</h5>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className="ms-2">email@gmail.com</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faAddressCard} />
                                <span className="ms-2">123-456-789</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button variant="outline-light" className="text-uppercase mt-4">Contact Me</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <span className="d-flex gap-3">
                                {/* Bonus */}
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faFacebookF} />
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span>Copyright 2024</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterSection;
