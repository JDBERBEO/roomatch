import { React, useEffect } from "react";
import { Carouselph } from "../../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ListGroup, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BreadCrumb } from "../../components/BreadCrumb";
import { imgAdds } from "../../Mock_data/imgsAdd";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import {
  reserve,
  changeStartDate,
  changeEndDate,
} from "../../store/ReservationReducer";

import { getAd } from "../../store/getOneAdsReducer";

export const Advertisement = () => {
  const dispatch = useDispatch();
  const history = useHistory;
  const RoomieIdMocked = "60e0a38fc192a31d21bea52f";

  let { id } = useParams();
  const { loading, error, ad, startDate, endDate } = useSelector((state) => {
    console.log("state: ", state);
    return {
      loading: state.getOneAdReducer.loading,
      error: state.getOneAdReducer.error,
      ad: state.getOneAdReducer.ad,
      startDate: state.reservationReducer.startDate,
      endDate: state.reservationReducer.endDate,
    };
  });

  useEffect(() => {
    dispatch(getAd(id));
  }, []);

  // const { ads, startDate, endDate, loading, error } = useSelector((state) => {
  //   return {
  //     ads: state.getAdsReducer.ads,
  //     loading: state.reservationReducer.loading,
  //     error: state.reservationReducer.error,
  //   };
  // });
  // const adobj = ads.filter((ad) => ad._id === id);
  const paidReservation = ad.price;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reserve(id, startDate, RoomieIdMocked, endDate, paidReservation));
  }

  if (loading) return <p>loading...</p>;
  if (error) return <p>oops, something went wrong </p>;

  console.log("esto es ad", ad);
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-7">
            <BreadCrumb />
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <Carouselph array={imgAdds} />
          </Col>
          <Col className="col-6">
            <ListGroup as="ul" key={ad._id}>
              <ListGroup.Item as="li" active>
                {ad.living_space}
              </ListGroup.Item>
              <ListGroup.Item as="li">{ad.price}</ListGroup.Item>
              <ListGroup.Item as="li">{ad.description}</ListGroup.Item>
            </ListGroup>
            {/* <DayPicker /> */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="startDate">
                <Form.Label>StartDate</Form.Label>
                <Form.Control
                  onChange={(e) => dispatch(changeStartDate(e.target.value))}
                  type="text"
                  placeholder="Enter startDate"
                  // value={startDate}
                  name="startDate"
                />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label>EndDate</Form.Label>
                <Form.Control
                  onChange={(e) => dispatch(changeEndDate(e.target.value))}
                  type="text"
                  placeholder="Enter endDate"
                  // value={endDate}
                  name="endDate"
                />
              </Form.Group>
              <Button type="submit">Match Host!</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
