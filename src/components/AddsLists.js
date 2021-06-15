import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";

export const AddsLists = ({
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
            <Carousel>
              {array.map((el) => (
                <Carousel.Item key={el.title}>
                  <img
                    className="d-block w-100"
                    src={el.src}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
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
