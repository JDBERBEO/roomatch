import React from "react";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row className="justify-content-right"></Row>
        <Row className="justify-content-center">
          <Col className="col-7">
            <Breadcrumb>
              <Breadcrumb.Item>City</Breadcrumb.Item>
              <Breadcrumb.Item>Checkin</Breadcrumb.Item>
              <Breadcrumb.Item>Checkout</Breadcrumb.Item>
              <Breadcrumb.Item>Guests</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/advertisements">
                  <Button>Search</Button>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <Carouselph array={imgAdds} />
    </div>
  );
};
