import React from "react";
import { Container, Col, Card, Button, ListGroup, Row } from "react-bootstrap";
import ModalUpdateProfile from "./ModalUpdateProfileHost";
import { HostProfilePictureEditMain } from "./UsersProfilePictureEdit/HostProfilePictureEdit/HostProfilePictureEditMain";

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
        <Col className="col-4">
          <Card style={{ width: "23rem" }}>
            <Card.Img variant="top" src={profilePhoto} />
            <HostProfilePictureEditMain />
            <Card.Body key={id}>
              <Card.Title>
                {name} {lastName}
              </Card.Title>
              <Card.Text>{age}</Card.Text>
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
    </Container>
  );
};
