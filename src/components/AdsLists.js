import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";

export const AdsLists = ({
  id,
  living_space,
  price,
  description,
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
              <ListGroup.Item as="li" active>
                {living_space}
              </ListGroup.Item>
              <ListGroup.Item as="li">{price}</ListGroup.Item>
              <ListGroup.Item as="li">{description}</ListGroup.Item>
            </ListGroup>
            <Button variant="outline-success" onClick={() => handleSelect(id)}>
              Book this space
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
