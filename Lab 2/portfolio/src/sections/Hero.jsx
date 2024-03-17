import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection({ name, role }) {
    return (
        <section className="bg-black">
            <Container>
                <Row className="py-5">
                    <Col>
                        <h1 className="text-start text-white fw-bold mt-5">{name}</h1>
                        <h3 className="text-start text-white mt-3 mb-4">{role}</h3>
                        <Button variant="outline-light" className="text-uppercase my-5">Contact Me</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection;
