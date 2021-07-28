import React from "react";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { handleFilterCity } from "../store/FilterReducer";
import DayPicker from "react-day-picker";
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

export const Home = () => {
  const dispatch = useDispatch();
  const { filterError, filterLoading, city, selectedDays } = useSelector(
    ({ filterPostReducer }) => {
      return {
        city: filterPostReducer.city,
        selectedDays: filterPostReducer.selectedDays,
      };
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const modifiers = {
    selected: selectedDays,
  };

  if (filterLoading) return <p>Loading...</p>;
  if (filterError) return <p>Oops Something went wrong</p>;

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
            <Card className="text-center">
              <Card.Header className="pink text-white">
                <h3>Search for your favorite living space here!</h3>
              </Card.Header>
              <Form onSubmit={handleSubmit}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Form.Label>Select the city</Form.Label>
                      <Form.Control
                        as="select"
                        id="inlineFormCustomSelect"
                        custom
                        className="city"
                        htmlFor="inlineFormCustomSelect"
                        name="city"
                        onChange={(e) => {
                          dispatch(handleFilterCity(e.target.value));
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
                    </Col>
                    <Col>
                      <Form.Group controlId="checkin">
                        <Form.Label>Select your days </Form.Label>
                        <DayPicker
                          className="Selectable"
                          selectedDays={selectedDays}
                          modifiers={modifiers}
                          onDayClick={(day, { selected }) =>
                            dispatch(
                              handleDayClick(day, selectedDays, selected)
                            )
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
                <Link
                  to={`/advertisements/?city=${city}&selectedDays=${selectedDays}`}
                >
                  <Button className="waves-effect waves-white orange bt-flat text-white" type="submit">Search
                   <i class="material-icons left">search</i>
                  </Button>
                </Link>
              </Form>
              <Card.Footer className="text-muted">
              
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <div class="divider"></div>
      <br></br>
      <div className="container">
        <BreadCrumbCss /> 
        <BodyCss/>  
        <Carouselph array={imgAdds}/>
        <br></br>
      </div>
      <br></br>
      <div class="divider"></div>
       
      <ParallaxFooter/>
      <Payments/>

      <FooterCss />
    </div>
  );
};
