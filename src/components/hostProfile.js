import React from "react";
import { Tabs, Tab, Form, Container, Col, Button } from "react-bootstrap";
export const CardProfile = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Personal data"></Tab>
        <Tab eventKey="profile" title="Show your space">
          <Form>
            <Form.Group controlId="Living_space">
              <Form.Label>Living space type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the type of your space"
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a description of your space"
              />
            </Form.Group>
            <Form.Group controlId="rooms">
              <Form.Label>rooms</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of rooms in your space"
              />
            </Form.Group>
            <Form.Group controlId="bathroom">
              <Form.Label>Bathroom</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of bathrooms available"
              />
            </Form.Group>
            <Form.Row className="justify-center">
              <Col xs="auto" className="my-1">
                <Form.Label
                  className="private_room"
                  htmlFor="inlineFormCustomSelect"
                >
                  private bathroom
                </Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">yes</option>
                  <option value="2">no</option>
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Group controlId="Parking">
              <Form.Label>Parking</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of Parkings available"
              />
            </Form.Group>

            <Form.Group controlId="Photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photos of the space"
              />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control type="text" placeholder="Enter price of to rent" />
            </Form.Group>
            <Form.Group controlId="facilities">
              <Form.Label>facilities</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the facilities of your space"
              />
            </Form.Group>
            <Form.Group controlId="house_rules">
              <Form.Label>Rules</Form.Label>
              <Form.Control type="text" placeholder="Enter your rules" />
            </Form.Group>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Form>
        </Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
    </Container>
  );
};
