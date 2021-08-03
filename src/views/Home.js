import React from "react";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";
import { handleFilterCity } from "../store/FilterReducer";

import { handleDayClick } from "../store/FilterReducer";
import Image from "react-bootstrap/Image";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ModalHome from "../components/ModalHome";
import { BeHost } from "../components/BeHost";
import { SignUp } from "../components/SignUp";
import { useHistory } from "react-router-dom";
import { Parallax } from "../components/Parallex";
import { ParallaxFooter } from "../components/ParallexFooter";
import { NavBarCss } from "../components/NavBarCss";
import { BodyCss } from "../components/BodyCss";
import { BreadCrumb } from "../components/BreadCrumb";
import { BreadCrumbCss } from "../components/BreadCrumbCss";
import { FooterCss } from "../components/FooterCss";
import { Payments } from "../components/Payments";
import { FilterComponent } from "./FilterComponent";

export const Home = () => {
  return (
    <div className="App">
      <NavBarCss />
      <br></br>
      <Parallax />
      <br></br>
      <div class="divider"></div>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <FilterComponent />
          </Col>
        </Row>
      </Container>

      <div class="divider"></div>
      <br></br>
      <div className="container">
        <BreadCrumbCss />
        <BodyCss />
        <br></br>
      </div>
      <br></br>
      <div class="divider"></div>

      <ParallaxFooter />
      <br></br>

      <FooterCss />
    </div>
  );
};
