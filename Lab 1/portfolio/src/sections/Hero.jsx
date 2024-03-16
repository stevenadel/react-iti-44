import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection({ name, role }) {
    return (
        <section className="bg-black">
            <Container>
                <Row className="p-5">
                    <Col>
                        <h1 className="text-start text-white fw-bold">{name}</h1>
                        <h2 className="text-start text-white">{role}</h2>
                        <Button variant="outline-light" className="text-uppercase mt-4">Contact Me</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection;
