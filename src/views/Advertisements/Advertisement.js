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
import { reserve, handleDayClick } from "../../store/ReservationReducer";
import { getAd } from "../../store/getOneAdsReducer";

export const Advertisement = () => {
  const dispatch = useDispatch();
  // const [adhost, setAdhost] = useState([]);

  let { id } = useParams();
  const { loading, error, ad, selectedDays } = useSelector((state) => {
    return {
      loading: state.getOneAdReducer.loading,
      error: state.getOneAdReducer.error,
      ad: state.getOneAdReducer.ad,
      selectedDays: state.reservationReducer.selectedDays,
    };
  });

  useEffect(() => {
    dispatch(getAd(id));
  }, []);

  let BookedDaysPerAdvertisement = "";
  if (ad.reservations !== undefined) {
    BookedDaysPerAdvertisement = ad.reservations
      .map((reservation) =>
        reservation.selectedDays.map((bookedDate) => new Date(bookedDate))
      )
      .flat();
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reserve(ad.living_space, ad._id, selectedDays, ad.price));
  }

  const modifiers = {
    disabled: BookedDaysPerAdvertisement,
    selected: selectedDays,
  };

  // if (ad.length !== 0) {
  //   setAdhost(ad.host);
  // }

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
            <Form onSubmit={selectedDays.length !== 0 ? handleSubmit : null}>
              <DayPicker
                className="Selectable"
                selectedDays={selectedDays}
                modifiers={modifiers}
                disabledDays={BookedDaysPerAdvertisement}
                onDayClick={(day, { selected, disabled }) =>
                  dispatch(
                    handleDayClick(day, selectedDays, selected, disabled)
                  )
                }
              />
              <Button type="submit">Match Host!</Button>
            </Form>
            <ListGroup as="ul" key={ad._id}>
              <ListGroup.Item as="li" active>
                {ad.host.name}
              </ListGroup.Item>
              <ListGroup.Item as="li">{ad.host.email}</ListGroup.Item>
              <ListGroup.Item as="li">{ad.host.description}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
