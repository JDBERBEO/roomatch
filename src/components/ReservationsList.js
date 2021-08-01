import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { Card } from "react-bootstrap";

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
      <div class="divider"></div>
      <br></br>
      <Row>
        <Card className="container z-depth-0" border="light">  
          <Card.Body clasName="container">
            <Row>
              <Col>
                <Card className="z-depth-5">
                  <Card.Body>
                    <Carouselph array={array} />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card className="text-center z-depth-5" border="light">
                <Card.Body>
                  <ListGroup as="ul" key={id}>
                    <ListGroup.Item className="pink" as="li" active>{living_space_type}</ListGroup.Item>
                    <ListGroup.Item as="li">{description}</ListGroup.Item>
                    <ListGroup.Item as="li">{paidReservation}</ListGroup.Item>             
                  </ListGroup>
                  <br></br>
                  <Button variant="danger" onClick={() => handleSelect(id)}>
                    See reservation </Button>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      </Container>
    </div>
  );
};
