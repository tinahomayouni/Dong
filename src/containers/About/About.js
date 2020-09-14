import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section id="about">
      <Container fluid>
        <Row>
          <Col>
            <h1>About Dong !!</h1>
            <p>
              We are soooo Awesome !!
              <br />
              Just try it now.. :D
            </p>
          </Col>
          <Col>our image</Col>
        </Row>
      </Container>
    </section>
  );
}
