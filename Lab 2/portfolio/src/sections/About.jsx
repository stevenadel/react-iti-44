import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function AboutSection({ description }) {
    return (
        <section className="bg-light p-5">
            <Container>
                <Row>
                    <Col xs={3}>
                        <h1 className="fw-bold">About Me</h1>
                    </Col>
                    <Col xs={9}>
                        <p className="text-start">{description}</p>
                        <a href="resume.pdf" download>
                            <Button variant="dark" className="mt-3">Download Resume</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutSection;