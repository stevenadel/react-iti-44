import React, { Fragment } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function SkillsSection() {
  const skills = [{ name: "HTML", rating: 95 }, { name: "CSS", rating: 85 }, { name: "JavaScript", rating: 90 }, { name: "TypeScript", rating: 80 }, { name: "Python", rating: 65 }, { name: "Java", rating: 85 }];

  return (
    <section className="bg-dark p-5 text-white d-flex flex-column align-items-center gap-3">
      <h1>Skills</h1>
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus neque magni soluta eos sapiente, in tempora laboriosam corrupti eius eaque sit, porro harum. Maiores culpa quod officiis reiciendis tenetur incidunt similique enim nihil, magni inventore animi dolorum nesciunt itaque eveniet veritatis in odio! Fugiat magnam dignissimos molestias nesciunt illum veniam.
      </p>
      <Container className="gap-5 w-100">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center w-50">
            <h4>My Focus</h4>
            <hr className="bg-light w-50" />
            <h4>Back-End Developer</h4>
            <h4>Front-End Developer</h4>
            <h4>Software Developer</h4>
            <h4>Open Source Software</h4>
          </Col>
          <Col className="w-50">
            {skills.map((skill, index) => (
              <Fragment key={`skill-${index}`}>
                <ProgressBar variant="secondary" now={skill.rating} className="m-4" label={skill.name} />
              </Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SkillsSection;
