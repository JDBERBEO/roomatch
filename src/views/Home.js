import React, { useEffect, useRef } from "react";
import { Carouselph } from "../components/Carousel";
import { Row, Col, Container, Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { imgAdds } from "../Mock_data/imgsAdd";
import { NavBar } from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { filterPost, handleFilterCity } from "../store/FilterReducer";
import DayPicker from "react-day-picker";
import { handleDayClick } from "../store/FilterReducer";

export const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterError, filterLoading, city, selectedDays } = useSelector(
    ({ filterPostReducer }) => {
      return {
        filterLoading: filterPostReducer.filterLoading,
        filterError: filterPostReducer.filterError,
        city: filterPostReducer.city,
        selectedDays: filterPostReducer.selectedDays,
      };
    }
  );

  console.log("city desde home", city);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    dispatch(filterPost(city, selectedDays, history));
  };

  const modifiers = {
    selected: selectedDays,
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
