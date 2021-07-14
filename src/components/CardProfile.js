import React from "react";
import { Card, Button, Nav, Row, Col } from "react-bootstrap";
export const CardProfile = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col className="col-7">
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Edit Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Reservations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#firs">Reservations
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Welcome to your profile </Card.Title>
              <Card.Text>
                Reservation 1
              </Card.Text>
              <Button variant="primary">Save changes</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
