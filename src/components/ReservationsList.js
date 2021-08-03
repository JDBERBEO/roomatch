import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Carouselph } from "./Carousel";
import { Card } from "react-bootstrap";
import { Payments } from "./Payments";

export const ReservationsList = ({
  reservations,
  id,
  living_space_type,
  price,
  description,
  selectedDays,
  array,
  city,
  handleSelect,
}) => {
  console.log("reservations", reservations);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
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
                <Col>
                  <Card className="z-depth-5">
                    <Card.Body>
                      {}
                      <Carouselph array={array} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center z-depth-5" border="light">
                    <Card.Body>
                      <ListGroup as="ul" key={id}>
                        <ListGroup.Item className="pink" as="li" active>
                          <p>
                            <strong>Living Space Name:</strong>
                          </p>
                          {living_space_type}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>Price:</strong>
                          </p>
                          {formatter.format(price)}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>Days Booked:</strong>
                          </p>
                          <br />
                          {!!selectedDays &&
                            selectedDays.length > 0 &&
                            selectedDays.map((day) => <p>{day.toString()}</p>)}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <p>
                            <strong>City:</strong>
                          </p>
                          {city}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                         <Payments
                         living_space_type={living_space_type}
                         totalPrice={price}
                         />
                        </ListGroup.Item>
                      </ListGroup>
                      <br></br>
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
