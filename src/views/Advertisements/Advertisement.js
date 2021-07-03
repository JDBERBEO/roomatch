import React from "react";
import { Carouselph } from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Advertisement = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-7">{/* <Carouselph /> */}</Col>
          <Col className="col-4">
            <Button>Book Now!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
