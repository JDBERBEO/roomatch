import { React, useEffect } from "react";
import { Carouselph } from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ListGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BreadCrumb } from "../../components/BreadCrumb";
import { imgAdds } from "../../Mock_data/imgsAdd";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import {
  reserve,
  handleDayClick,
  getBookedDays,
} from "../../store/ReservationReducer";
import { getAd } from "../../store/getOneAdsReducer";

export const Advertisement = () => {
  const dispatch = useDispatch();
  const RoomieIdMocked = "60e0a38fc192a31d21bea52f";

  let { id } = useParams();
  const {
    loading,
    error,
    ad,
    range,
    reserveLoading,
    reserveError,
    reservations,
    reservationsError,
  } = useSelector((state) => {
    return {
      loading: state.getOneAdReducer.loading,
      error: state.getOneAdReducer.error,
      ad: state.getOneAdReducer.ad,
      range: state.reservationReducer.range,
      reserveLoading: state.reservationReducer.reserveLoading,
      reserveError: state.reservationReducer.reserveError,
      reservations: state.reservationReducer.reservations,
      reservationsError: state.reservationReducer.reservationsError,
    };
  });

  useEffect(() => {
    dispatch(getAd(id));
    dispatch(getBookedDays());
  }, []);

  const newdateBKDAYS = reservations
    .filter((reservation) => reservation.range)
    .map((reservation) => reservation.range)
    .map((range) => ({
      from: new Date(range.from),
      to: new Date(range.to),
    }));

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reserve(id, range, RoomieIdMocked, ad.price));
  }

  const modifiers = {
    start: range.from,
    end: range.to,
    disabled: newdateBKDAYS,
  };
  const { from, to } = range;

  if (loading) return <p>loading...</p>;
  if (error) return <p>oops, something went wrong </p>;
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-8">
            <BreadCrumb />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-5">
            <Carouselph array={imgAdds} />
          </Col>
          <Col className="col-7">
            <ListGroup as="ul" key={ad._id}>
              <ListGroup.Item as="li" active>
                {ad.living_space}
              </ListGroup.Item>
              <ListGroup.Item as="li">{ad.price}</ListGroup.Item>
              <ListGroup.Item as="li">{ad.description}</ListGroup.Item>
            </ListGroup>
            <Form
              onSubmit={
                range.from !== undefined || range.to !== undefined
                  ? handleSubmit
                  : null
              }
            >
              <DayPicker
                className="Selectable"
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                disabledDays={newdateBKDAYS}
                onDayClick={(day, { disabled }) =>
                  dispatch(handleDayClick(day, range, disabled))
                }
              />
              <Button type="submit">Match Host!</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
