import React from "react";
import Menu from "../components/menu/Menu";
import { Col, Row, Container } from "react-bootstrap";

function Header() {
  return (
    <div id="headerBar">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Menu />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Header;
