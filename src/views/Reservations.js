import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getReservations } from "../store/getReservationsReducer";
import { ReservationsList } from '../components/ReservationsList'
import { imgAdds } from "../Mock_data/imgsAdd";

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
      <h1>My Reservations</h1>
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
    </main>
  );
}



