import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from '../components/PortfolioCard';

function PortfolioSection() {
  return (
    <section className="bg-light p-5">
      <h1 className="fw-bold">Portfolio</h1>
      <Container>
        <Row>
          <Col md={4} className="mt-5">
            <PortfolioCard title="Web Design" />
          </Col>
          <Col md={4} className="mt-5">
            <PortfolioCard title="Web Design" altTheme />
          </Col>
          <Col md={4} className="mt-5">
            <PortfolioCard title="Web Design" />
          </Col>
          <Col md={4} className="mt-5">
            <PortfolioCard title="Web Design" altTheme />
          </Col>
          <Col md={4} className="mt-5">
            <PortfolioCard title="Web Design" />
          </Col>
          <Col md={4} className="mt-5">
            <PortfolioCard title="Web Design" altTheme />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
