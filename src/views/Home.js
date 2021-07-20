import React from "react";
//import "../materialize.css";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";
import Image from 'react-bootstrap/Image'
//import 'materialize-css/dist/css/materialize.min.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ModalHome from "../components/ModalHome";
import { BeHost } from "../components/BeHost";
import { SignUp } from "../components/SignUp";
import { useHistory } from "react-router-dom";
import {Parallax} from "../components/Parallex";
import {ParallaxFooter} from "../components/ParallexFooter";
import {NavBarCss} from "../components/NavBarCss";
import {BodyCss} from "../components/BodyCss";
import { BreadCrumb } from '../components/BreadCrumb';
import { BreadCrumbCss } from "../components/BreadCrumbCss";
import { FooterCss } from "../components/FooterCss";


export const Home = () => {

  return (
    <div className="App">
      <NavBarCss/> 
      <Parallax/>
      <br></br>
      <BreadCrumbCss/>
      <div class="divider"></div>
      <BodyCss/>    
      <ParallaxFooter/>
      <br></br>
      <FooterCss/>
      
    </div>
  );
};
