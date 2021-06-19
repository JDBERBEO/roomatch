import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row } from "react-bootstrap";
import { Carouselph } from "./Carousel";

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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
