import React from "react";
import { Carouselph } from "../components/Carousel";
import { SingUp } from "../components/SingUp";
import { BeHost } from "../components/BeHost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { ModalHome } from "../components/ModalHome";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-right">
          <Col>
            <SingUp />
          </Col>
          <Col>
            <BeHost />
          </Col>
          <ModalHome />
        </Row>
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
      <Carouselph />
    </div>
  );
};
