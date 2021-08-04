import React from "react";
import { Form, Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Spinner} from "react-bootstrap";
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

function HostAdForm() {
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
      tags: hostPostReducer.tags,
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
      activities: hostPostReducer.activities,
      ranking: hostPostReducer.ranking,
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
  if (loading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (error) return <p>user can't be created</p>;
  return (
    <div>
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Personal data"></Tab>
          <Tab eventKey="profile" title="Show your space"></Tab>
          <Row className="justify-content-center">
            <Col className="col-6">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="public_services">
                  <Form.Label>Public Services</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter public services"
                    name="public_services"
                    onChange={(e) =>
                      dispatch(changePublicServices(e.target.value))
                    }
                    value={public_services}
                  />
                </Form.Group>
                <Form.Group controlId="facilities">
                  <Form.Label>Facilities</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Facilities"
                    name="facilities"
                    onChange={(e) => dispatch(changeFacilities(e.target.value))}
                    value={facilities}
                  />
                </Form.Group>
                <Form.Group controlId="living_space">
                  <Form.Label>Living Space</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter living_space"
                    name="living_space"
                    onChange={(e) =>
                      dispatch(changeLivingSpace(e.target.value))
                    }
                    value={living_space}
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    name="description"
                    onChange={(e) =>
                      dispatch(changeDescription(e.target.value))
                    }
                    value={description}
                  />
                </Form.Group>
                <Form.Group controlId="rooms">
                  <Form.Label>Rooms</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter rooms"
                    name="rooms"
                    onChange={(e) => dispatch(changeRooms(e.target.value))}
                    value={rooms}
                  />
                </Form.Group>
                <Form.Group controlId="bathroom">
                  <Form.Label>Bathroom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="bathroom"
                    name="bathroom"
                    onChange={(e) => dispatch(changeBathRoom(e.target.value))}
                    value={bathroom}
                  />
                </Form.Group>
                <Form.Group controlId="private_bathroom">
                  <Form.Label>Private Bathroom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Private bathroom"
                    name="n"
                    onChange={(e) =>
                      dispatch(changePrivateBathRoom(e.target.value))
                    }
                    value={private_bathroom}
                  />
                </Form.Group>

                <Form.Group controlId="parking">
                  <Form.Label>Parking</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Parking"
                    name="parking"
                    onChange={(e) => dispatch(changeParking(e.target.value))}
                    value={parking}
                  />
                </Form.Group>
                <Form.Group controlId="photo">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter photo"
                    name="photo"
                    onChange={(e) => dispatch(changePhoto(e.target.value))}
                    value={photo}
                  />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="price"
                    name="price"
                    onChange={(e) => dispatch(changePrice(e.target.value))}
                    value={price}
                  />
                </Form.Group>
                <Form.Group controlId="house_rules">
                  <Form.Label>House Rules</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter House Rules"
                    name="house_rules"
                    onChange={(e) => dispatch(changeHouseRules(e.target.value))}
                    value={house_rules}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Tab eventKey="contact" title="Contact"></Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default HostAdForm;
