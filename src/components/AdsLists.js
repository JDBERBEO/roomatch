import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { Card } from "react-bootstrap";


export const AdsLists = ({
  id,
  living_space,
  price,
  description,
  array,
  handleSelect,
  city,
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
                      <ListGroup.Item className="pink" as="li" active>
                        {living_space}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">{price}</ListGroup.Item>
                      <ListGroup.Item as="li">{description}</ListGroup.Item>
                      <ListGroup.Item as="li">{city}</ListGroup.Item>
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
