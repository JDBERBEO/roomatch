import React from "react";
import { Carouselph } from "../components/Carousel";
import { SignUp } from "../components/SignUp";
import { BeHost } from "../components/BeHost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ModalHome from "../components/ModalHome";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "react-dom/cjs/react-dom.development";

const imgAddsHome = [
  {
    title: 1,
    src: "https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560",
    alt: "First slide",
    price: 4,
    ranking: 0,
  },
  {
    title: 2,
    src: "https://i.pinimg.com/originals/a6/60/9d/a6609d6a10f843c59734616accae5a89.jpg",
    alt: "Second slide",
    price: 5,
    ranking: 0,
  },
  {
    title: 3,
    src: "https://soyarquitectura.mx/wp-content/uploads/2020/09/Fachada-Casa-moderna-dos-pisos-Nogal-blogc7-edited.jpg",
    alt: "Third slide",
    price: 6,
    ranking: 0,
  },
];

export const Home = () => {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-right">
          <Col>
            <SignUp />
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
      <Carouselph array={imgAddsHome} />
    </div>
  );
};

export default Home