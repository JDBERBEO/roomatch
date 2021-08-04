import { React, useEffect } from "react";
import { Carouselph } from "../../components/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ListGroup, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { reserve, handleDayClick } from "../../store/ReservationReducer";
import { getAd } from "../../store/getOneAdsReducer";
import { Card } from "react-bootstrap";
import swal from 'sweetalert'
import { NavBarCss } from "../../components/NavBarCss";
import { Spinner} from "react-bootstrap";

export const Advertisement = () => {
  const dispatch = useDispatch();
  const history=useHistory();

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

  let totalPrice = ad.price * selectedDays.length;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  let totalPriceFormat = formatter.format(totalPrice);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reserve(ad.living_space, ad._id, selectedDays, totalPrice,history));
  }

  const modifiers = {
    disabled: BookedDaysPerAdvertisement,
    selected: selectedDays,
  };

  if (loading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (error) return <p>oops, something went wrong </p>;

  return (
    <div>
      <NavBarCss/>
    <div class="container">
          <br></br>
          <h1> Book Now!</h1>
          <br></br>
          <div class="divider"></div>
          <br></br>
      <Row>
        <Card className="container z-depth-0" border="light">
          <Card.Body clasName="container">
            <Row>
              <Col>
                <Card className="z-depth-5">
                  <Card.Body>
                    <h4>Host's Info</h4>
                    <br></br>
                    {!!ad.host && (
                      <ListGroup as="ul" key={ad._id}>
                        <ListGroup.Item as="li" active className="pink" as="li">
                          {ad.host.name}
                        </ListGroup.Item>
                        <ListGroup.Item as="li">{ad.host.email}</ListGroup.Item>
                        <ListGroup.Item as="li">
                          {ad.host.description}
                        </ListGroup.Item>
                      </ListGroup>
                      )}
                    <br></br>
                    <div class="divider"></div>
                    <br></br>
                    <Carouselph array={ad.photos} />
 
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center z-depth-5" border="light">
                  <Card.Body>
                    <h4>Your space</h4>
                    <br></br>
                    <ListGroup as="ul" key={ad._id}>
                      <ListGroup.Item className="pink" as="li" active>
                        {ad.living_space}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <p><strong>Description:</strong></p>
                        {ad.description}</ListGroup.Item>
                      <ListGroup.Item as="li">
                        <p><strong>Bathrooms:</strong></p>
                        {ad.bathroom}</ListGroup.Item>
                      <ListGroup.Item as="li">
                        <p><strong>Facilities:</strong></p>
                        {ad.facilities}</ListGroup.Item>
                      <ListGroup.Item as="li">
                        <p><strong>House Rules:</strong></p>
                        {ad.house_rules}</ListGroup.Item>
                      <ListGroup.Item as="li">
                        <p><strong>Private Bathroom:</strong></p>
                        {ad.private_bathroom}</ListGroup.Item>
                      <ListGroup.Item as="li">
                        <p><strong>Public Services:</strong></p>
                        {ad.public_services}</ListGroup.Item>
                    </ListGroup>
                    <br></br>
                    <div class="divider"></div>
                    <br></br>
                    <h4>PRICE: </h4>
                    <ListGroup as="ul" key={ad._id}>
                      <ListGroup.Item as="li" active className="pink">
                        Price per day: {formatter.format(ad.price)}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        Total Price: {totalPriceFormat}
                      </ListGroup.Item>
                    </ListGroup>
                    <Form
                      onSubmit={selectedDays.length !== 0 ? handleSubmit : null}
                    >
                      <DayPicker
                        className="container Selectable"
                        selectedDays={selectedDays}
                        modifiers={modifiers}
                        disabledDays={BookedDaysPerAdvertisement}
                        onDayClick={(day, { selected, disabled }) =>
                          dispatch(
                            handleDayClick(
                              day,
                              selectedDays,
                              selected,
                              disabled
                            )
                          )
                        }
                      />
                      <Button variant="danger"  type="submit">Match Host!</Button>
                    </Form>
                    <br></br>
                    <div class="divider"></div>
                    <br></br>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="pink"></Card.Footer>
        </Card>
      </Row>
    </div>
    </div>

  );
};
