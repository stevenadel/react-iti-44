import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from '../components/PortfolioCard';

function PortfolioSection() {
  const titles = ["Web Design", "Front-End", "Back-End", "Full-Stack", "Software Engineer", "Android"]

  return (
    <section className="p-5">
      <Container>
        <h1 className="fw-bold">Portfolio</h1>
        <Row>
          {titles.map((title, index) => (
              <Col key={`card-${index}`} md={4} className="mt-5 d-flex justify-content-center">
                <PortfolioCard title={title} altTheme={index % 2 === 0} />
              </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
