import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getReservations } from "../store/getReservationsReducer";
import { ReservationsList } from '../components/ReservationsList'
import { imgAdds } from "../Mock_data/imgsAdd";
import { Col, Container, Row, Button } from "react-bootstrap";

export const Reservations = () => {
  const history = useHistory()
  const dispatch = useDispatch();

  const { loading, error, reservations } = useSelector(({ getReservationsReducer }) => {
    return {
      loading: getReservationsReducer.loading,
      error: getReservationsReducer.error,
      reservations: getReservationsReducer.reservations,
    };
  });

  const handleSelect = (id) => {
    history.push(`/reservation/${id}`)
  }

  useEffect(() => {
    dispatch(getReservations());
  }, []);

  if (loading) return <p>Loading algooo...</p>;
  if (error) return <p>Oops Something went wrong</p>;
  return (
    <main>
      <h2>My Reservations</h2>
      <br></br>
      {reservations.map((el) => (
        <ReservationsList
          reservations={reservations}
          key={el._id}
          id={el._id}
          living_space_type={el.living_space_type}
          paidReservation={el.paidReservation}
          description={el.description}
          array={imgAdds}
          handleSelect={handleSelect}
        />
      ))}
      <Row className="container pink"><p></p></Row>
    </main>
  );
}



