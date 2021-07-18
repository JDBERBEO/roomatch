import React, { useEffect, useRef } from "react";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export const Home = () => {
  const mapboxgl.accessToken =
    "pk.eyJ1IjoianVhbmJlcmJlbyIsImEiOiJja3I3MHZ4OWkxbnBsMnduM21hcnd2ZHg3In0.RRDvN27EMAe0eYU_eozmdQ";
  const ref = useRef("textinput");
  useEffect(() => {
    let geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country, region, place, postcode, locality, neighborhood",
    });
    geocoder.addTo("textinput");
  }, []);
  return (
    <div className="App">
      <input type="text" ref={ref}></input>
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Card className="text-center">
              <Card.Header>
                Search for your favorite living space here!
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter the city"
                          // name="public_services"
                          // onChange={}
                          // value={public_services}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <Form.Group controlId="checkin">
                      <Form.Label>Checkin</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your checkin date"
                        // name="public_services"
                        // onChange={}
                        // value={public_services}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="checkout">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your checkout date"
                        // name="public_services"
                        // onChange={}
                        // value={public_services}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="guests">
                      <Form.Label>Guests</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the number of guests"
                        // name="public_services"
                        // onChange={}
                        // value={public_services}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Carouselph array={imgAdds} />
    </div>
  );
};
