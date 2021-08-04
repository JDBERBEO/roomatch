import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { Card } from "react-bootstrap";

export const AdsLists = ({
  id,
  living_space_type,
  price,
  description,
  array,
  handleSelect,
  city,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div>
      <Container>
        <div class="divider"></div>
        <br></br>
        <Row>
          <Card className="container z-depth-0" border="light">
            <Card.Body clasName="container">
              <Row>
                <Col xs={12} md={12} l={6}>
                  <Card className="z-depth-5">
                    <Card.Body>
                      <Carouselph array={array} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={12} l={6}>
                  <Card className="text-center z-depth-5" border="light">
                    <Card.Body>
                      <ListGroup as="ul" key={id}>
                        <ListGroup.Item className="pink" as="li" active>
                          <p>
                            <strong>
                              Living Space Name: {living_space_type}
                            </strong>
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>
                              Price Per Day: {formatter.format(price)}
                            </strong>
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>
                              Living Space Description: {description}
                            </strong>
                          </p>
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          {" "}
                          <p>
                            <strong>City: {city}</strong>
                          </p>
                        </ListGroup.Item>
                      </ListGroup>
                      <br></br>
                      <Button variant="danger" onClick={() => handleSelect(id)}>
                        Book this space
                      </Button>
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
