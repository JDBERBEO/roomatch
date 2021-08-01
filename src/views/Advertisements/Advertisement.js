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
import { CardBody } from "../../components/CardBody";
import { Card } from "react-bootstrap";

export const Advertisement = () => {
  const dispatch = useDispatch();

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

  if (loading) return <p>loading...</p>;
  if (error) return <p>oops, something went wrong </p>;
  return (
    <div class="container">
          <h1> Book Now!</h1>
          <br></br>
          <div class="divider"></div>
          <br></br>
      <Row>
        <Card className="container z-depth-0" border="light">  
          <Card.Header className="pink"></Card.Header>
          <Card.Body clasName="container">
            <Row>
              <Col>
                <Card className="z-depth-5">
                  <Card.Body>
                    <Carouselph array={imgAdds} />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center z-depth-5" border="light">
                  <Card.Body>
                    <ListGroup  as="ul" key={ad._id}>
                      <ListGroup.Item className="pink" as="li" active>
                        {ad.living_space}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">{ad.price}</ListGroup.Item>
                      <ListGroup.Item as="li">{ad.description}</ListGroup.Item>
                    </ListGroup>
                    <Form onSubmit={selectedDays.length !== 0 ? handleSubmit : null}>
                      <DayPicker
                        className="container Selectable"
                        selectedDays={selectedDays}
                        modifiers={modifiers}
                        disabledDays={BookedDaysPerAdvertisement}
                        onDayClick={(day, { selected, disabled }) =>
                          dispatch(
                            handleDayClick(day, selectedDays, selected, disabled)
                          )
                        }
                      />
                      <Button variant="danger"  type="submit">Match Host!</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="pink"></Card.Footer>
        </Card>
      </Row>
    </div>
  );
};
