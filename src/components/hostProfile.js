import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab, Form, Container, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  hostPostAdv,
  changePublicServices,
  changeFacilities,
  changeLivingSpace,
  changeDescription,
  changeRooms,
  changeBathRoom,
  changePrivateBathRoom,
  changeParking,
  changePhoto,
  changePrice,
  changeHouseRules,
} from "../store/hostPostReducer";
import { useHistory } from "react-router-dom";
import hostPostReducer from "../store/hostPostReducer";
export const HostProfileTab = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    loading,
    error,
    public_services,
    facilities,
    living_space,
    description,
    rooms,
    bathroom,
    private_bathroom,
    parking,
    photo,
    price,
    house_rules,
  } = useSelector(({ hostPostReducer }) => {
    return {
      loading: hostPostReducer.loading,
      error: hostPostReducer.error,
      public_services: hostPostReducer.public_services,
      facilities: hostPostReducer.facilities,
      living_space: hostPostReducer.living_space,
      description: hostPostReducer.description,
      rooms: hostPostReducer.rooms,
      bathroom: hostPostReducer.bathroom,
      private_bathroom: hostPostReducer.private_bathroom,
      parking: hostPostReducer.parking,
      photo: hostPostReducer.photo,
      price: hostPostReducer.price,
      house_rules: hostPostReducer.house_rules,
    };
  });
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      hostPostAdv(
        public_services,
        facilities,
        living_space,
        description,
        rooms,
        bathroom,
        private_bathroom,
        parking,
        photo,
        price,
        house_rules,
        history
      )
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops Something went wrong</p>;

  return (
    <Container>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Personal data"></Tab>
        <Tab eventKey="profile" title="Show your space">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="public_services">
              <Form.Label>Public Services</Form.Label>
              <Form.Control
                type="text"
                placeholder="public services that your space has"
                name="public_services"
                onChange={(e) => dispatch(changePublicServices(e.target.value))}
                value={public_services}
              />
            </Form.Group>
            <Form.Group controlId="Living_space">
              <Form.Label>Facilities</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the facilities of your space has"
                name="facilities"
                onChange={(e) => dispatch(changeFacilities(e.target.value))}
                value={facilities}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Living space</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a description of your space"
                name="living_space"
                onChange={(e) => dispatch(changeLivingSpace(e.target.value))}
                value={living_space}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a description of your space"
                name="description"
                onChange={(e) => dispatch(changeDescription(e.target.value))}
                value={description}
              />
            </Form.Group>
            <Form.Group controlId="rooms">
              <Form.Label>rooms</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of rooms in your space"
                name="rooms"
                onChange={(e) => dispatch(changeRooms(e.target.value))}
                value={rooms}
              />
            </Form.Group>
            <Form.Group controlId="bathroom">
              <Form.Label>Bathroom</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of bathrooms available"
                name="bathroom"
                onChange={(e) => dispatch(changeBathRoom(e.target.value))}
                value={bathroom}
              />
            </Form.Group>
            <Form.Row className="justify-center">
              <Col xs="auto" className="my-1">
                <Form.Label>private bathroom</Form.Label>
                <Form.Control
                  as="select"
                  id="inlineFormCustomSelect"
                  custom
                  className="private_room"
                  htmlFor="inlineFormCustomSelect"
                  name="private_room"
                  onChange={(e) => {
                    dispatch(changePrivateBathRoom(e.target.value));
                    console.log(e.target.value);
                  }}
                >
                  <option value="0">Choose...</option>
                  <option value={true}>yes</option>
                  <option value={false}>no</option>
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Group controlId="Parking">
              <Form.Label>Parking</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the number of Parkings available"
                name="parking"
                onChange={(e) => dispatch(changeParking(e.target.value))}
                value={parking}
              />
            </Form.Group>

            <Form.Group controlId="Photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photos of the space"
                name="photo"
                onChange={(e) => dispatch(changePhoto(e.target.value))}
                value={photo}
              />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price of to rent"
                name="price"
                onChange={(e) => dispatch(changePrice(e.target.value))}
                value={price}
              />
            </Form.Group>
            <Form.Group controlId="house_rules">
              <Form.Label>Rules</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your rules"
                name="rules"
                onChange={(e) => dispatch(changeHouseRules(e.target.value))}
                value={house_rules}
              />
            </Form.Group>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Form>
        </Tab>
        <Tab eventKey="posts" title="Posts"></Tab>
      </Tabs>
    </Container>
  );
};
