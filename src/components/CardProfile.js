import React from "react";
import axios from "axios";
import {
  Tabs,
  Tab,
  Container,
  Col,
  Card,
  Button,
  ListGroup,
  Row,
  Form,
} from "react-bootstrap";
import { Reservations } from "../views/Reservations";
import ModalUpdateProfile from "./ModalUpdateProfile";
import { useState } from "react";
import { RoomieProfilePictureEdit } from "./ModalUpdatePhotoProfile";

export const CardProfile = ({
  id,
  name,
  lastName,
  email,
  age,
  description,
  photos,
}) => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Profile">
          <Row className="justify-content-center">
            <Col className="col-4">
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={[photos]} />
                <Card.Body key={id}>
                  <Card.Title>
                    {name} {lastName}
                  </Card.Title>
                  <Card.Text>{age}</Card.Text>
                  <RoomieProfilePictureEdit />
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-8">
              <Card style={{ width: "20rem" }}>
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
        <Tab eventKey="contact" title="no se" disabled></Tab>
      </Tabs>
    </Container>
  );
};
