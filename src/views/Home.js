import React, { useEffect, useRef } from "react";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { filterPost, handleFilterCity } from "../store/FilterReducer";

export const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterError, filterLoading, city } = useSelector(
    ({ filterPostReducer }) => {
      return {
        filterLoading: filterPostReducer.filterLoading,
        filterError: filterPostReducer.filterError,
        city: filterPostReducer.city,
      };
    }
  );

  console.log("city desde home", city);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    dispatch(filterPost(city, history));
  };
  if (filterLoading) return <p>Loading...</p>;
  if (filterError) return <p>Oops Something went wrong</p>;

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Card className="text-center">
              <Card.Header>
                Search for your favorite living space here!
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
                          console.log("value", e.target.value);
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
                        <Form.Label>Checkout</Form.Label>
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
                {/* <Link to="/advertisements"> */}
                <Button type="submit">Search</Button>
                {/* </Link> */}
              </Form>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Carouselph array={imgAdds} />
    </div>
  );
};
