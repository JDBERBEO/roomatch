import React from "react";
import { Tabs, Tab, Container, Col, Card, Button, ListGroup, Row } from "react-bootstrap";
import { Reservations } from "../views/Reservations"
import ModalUpdateProfile from "./ModalUpdateProfile"

export const CardProfile = ({
  id,
  name,
  lastName,
  email,
  age,
  description,
}

) => {


  return (

    <Container>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Profile">
          <Row className="justify-content-center">
            <Col className="col-4" >
              <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body key={id}>
                  <Card.Title>{name} {lastName}</Card.Title>
                  <Card.Text>{age}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-8">
              <Card style={{ width: '20rem' }}>
                <Card.Header>Preferences</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>{email}</ListGroup.Item>
                </ListGroup>
                <ListGroup variant="flush">
                  <ListGroup.Item>{description}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <ModalUpdateProfile />
              </ListGroup.Item>
              <ListGroup.Item>
                <Button> Delete Profile </Button>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Tab>
        <Tab eventKey="profile" title="My Reservations">
          <Reservations />
        </Tab>
        <Tab eventKey="contact" title="no se" disabled>
        </Tab>
      </Tabs>
    </Container>

  );
};
