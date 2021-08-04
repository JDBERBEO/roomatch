import React from "react";
import { Container, Col, Card, Button, ListGroup, Row } from "react-bootstrap";
import ModalUpdateProfile from "./ModalUpdateProfileHost";

export const CardProfileHost = ({
  id,
  name,
  lastName,
  email,
  age,
  description,
  profilePhoto,
}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card className="text-center z-depth-0" border="light">
            <Card.Body>
              <Row className="container">
                <Col className="col s12 m6 l6">
                  <Card className="z-depth-5">
                    <Card.Img variant="top" src={profilePhoto} />
                    <Card.Body key={id}>
                      <Card.Title>
                        {name} {lastName}
                      </Card.Title>
                      <Card.Text>{age}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="col s12 m6 l6">
                  <Card className="z-depth-5">
                    <Card.Header className="pink text-white"><h5>Preferences</h5></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>{email}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                      <ListGroup.Item>{description}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <ListGroup  variant="flush">
          <ListGroup.Item>
            <ModalUpdateProfile />
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
};
