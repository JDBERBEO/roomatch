import React from "react";
import { Card, Button, Nav, Row, Col } from "react-bootstrap"
export const CardProfile = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Step 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Step 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled> Step 3 </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Welcome to your profile</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
    </Card.Text>
              <Button variant="primary">Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
