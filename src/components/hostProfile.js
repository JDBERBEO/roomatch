import React from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab, Form, Container, Col, Button, Row} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { MyAdvertisements } from "../views/hostAdvertisements";
import { ShowHostProfile } from "../views/showHostProfile";
import { useState } from "react";

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
  //changePhoto,
  changePrice,
  changeHouseRules,
  changeCity,
} from "../store/hostPostReducer";

export const HostProfileTab = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    data,
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
    city,
  } = useSelector(({ hostPostReducer }) => {
    return {
      loading: hostPostReducer.loading,
      error: hostPostReducer.error,
      data: hostPostReducer.data,
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
      city: hostPostReducer.city,
    };
  });

  const [files, setFile] = useState(null);

  function changePhoto(e) {
    setFile(e.target.files);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("public_services", public_services);
    data.append("facilities", facilities);
    data.append("living_space", living_space);
    data.append("description", description);
    data.append("rooms", rooms);
    data.append("bathroom", bathroom);
    data.append("private_bathroom", private_bathroom);
    data.append("parking", parking);
    data.append("price", price);
    data.append("house_rules", house_rules);
    data.append("city", city);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        data.append(`SpacePhoto${i}`, files[i], files[i]["name"]);
      }
    }
    dispatch(hostPostAdv(data, history));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops Something went wrong</p>;

  return (
    <Container>
      <Tabs
        className="container pink "
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
      >
        <Tab class="container text-pink" eventKey="home" title="Profile">
          <br></br>
          <ShowHostProfile />
        </Tab>
        <Tab eventKey="profile" title="Publish your space">
          <div class="section">
            <br></br>
            <Row className="justify-content-center">
            <Col className="col-6">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="public_services">
                <Form.Label>Public Services</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="public services that your space has"
                  name="public_services"
                  onChange={(e) =>
                    dispatch(changePublicServices(e.target.value))
                  }
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
                }}
              >
                <option value="0">Choose...</option>
                <option value={true}>yes</option>
                <option value={false}>no</option>
              </Form.Control>
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

              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Photos</Form.Label>
                <Form.Control
                  type="file"
                  id="files"
                  multiple
                  onChange={changePhoto}
                  accept="image/*"
                />
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>price per day</Form.Label>
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

              <Form.Label>Select the city</Form.Label>
              <Form.Control
                as="select"
                id="inlineFormCustomSelect"
                custom
                className="city"
                htmlFor="inlineFormCustomSelect"
                name="city"
                onChange={(e) => {
                  dispatch(changeCity(e.target.value));
                }}
              >
                <option value="0">Choose your city</option>
                <option value={"Bogotá"}>Bogotá</option>
                <option value={"Cali"}>Cali</option>
                <option value={"Medellín"}>Medellín</option>
                <option value={"Bucaramanga"}>Bucaramanga</option>
                <option value={"Santa Marta"}>Santa Marta</option>
                <option value={"Barranquilla"}>Barranquilla</option>
                <option value={"Cartagena"}>Cartagena</option>
                <option value={"Cúcuta"}>Cúcuta</option>
                <option value={"Pasto"}>Pasto</option>
                <option value={"Ibagué"}>Ibagué</option>
              </Form.Control>
              <Col>
                <Button type="submit">Submit</Button>
              </Col>
            </Form>
            </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="posts" title="Posts">
          <br></br>
          <MyAdvertisements />
        </Tab>
      </Tabs>
    </Container>
  );
};
