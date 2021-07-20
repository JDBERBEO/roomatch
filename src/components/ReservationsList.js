import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";

export const ReservationsList = ({
  id,
  living_space_type,
  description,
  paidReservation,
  array,
  handleSelect,
  
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-4">
            <Carouselph array={array} />
          </Col>
          <Col className="col-4">
            <ListGroup as="ul" key={id}>
              <ListGroup.Item as="li" active>{living_space_type}</ListGroup.Item>
              <ListGroup.Item as="li">{description}</ListGroup.Item>
              <ListGroup.Item as="li">{paidReservation}</ListGroup.Item>             
            </ListGroup>
            <Button variant="outline-success" onClick={() => handleSelect(id)}>
              See reservation </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
