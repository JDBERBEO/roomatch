import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import DayPicker from "react-day-picker";
import { Link } from "react-router-dom";
import { handleFilterCity } from "../store/FilterReducer";
import { handleDayClick } from "../store/FilterReducer";
import { Spinner} from "react-bootstrap";

export const FilterComponent = () => {
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

  if (filterLoading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (filterError) return <p>Oops Something went wrong</p>;
  return (
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
                    dispatch(handleDayClick(day, selectedDays, selected))
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
        <Link to={`/advertisements/?city=${city}&selectedDays=${selectedDays}`}>
          <Button
            className="waves-effect waves-white orange bt-flat text-white"
            type="submit"
          >
            Search
            <i class="material-icons left">search</i>
          </Button>
        </Link>
      </Form>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
};
