import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getReservations } from "../store/getReservationsReducer";
import { ReservationsList } from "../components/ReservationsList";
import { imgAdds } from "../Mock_data/imgsAdd";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Spinner} from "react-bootstrap";

export const Reservations = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, error, reservations } = useSelector((state) => {
    return {
      loading: state.getReservationsReducer.loading,
      error: state.getReservationsReducer.error,
      reservations: state.getReservationsReducer.reservations,
    };
  });

  const handleSelect = (id) => {
    history.push(`/reservation/${id}`);
  };

  useEffect(() => {
    dispatch(getReservations());
  }, []);

  console.log("reservations", reservations);
  if (loading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (error) return <p>Oops Something went wrong</p>;
  return (
    <main>
      <h2>My Reservations</h2>
      <br></br>
      {!!reservations &&
        reservations.length > 0 &&
        reservations.map((el) => (
          <ReservationsList
            key={el._id}
            reservations={reservations}
            id={el._id}
            living_space_type={el.living_space_type}
            price={el.paidReservation}
            description={el.description}
            selectedDays={el.selectedDays}
            array={el.advertisementId.photos}
            city={el.advertisementId.city}
            handleSelect={handleSelect}
          />
        ))}
      <Row className="container pink">
        <p></p>
      </Row>
    </main>
  );
};
