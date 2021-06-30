import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { Link } from "react-router-dom";
export const AdsLists = ({
  id,
  price,
  living_space_type,
  description,
  array,
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
                {living_space_type}
              </ListGroup.Item>
              <ListGroup.Item as="li">{price}</ListGroup.Item>
              <ListGroup.Item as="li">{description}</ListGroup.Item>
            </ListGroup>
            <Link to="/reservation">
              <Button variant="outline-success">Book this space</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
