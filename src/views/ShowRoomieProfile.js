import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProfile } from "../store/ProfileReducer";
import { CardProfile } from "../components/CardProfile";

export const ShowRoomieProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, error, profile } = useSelector(({ ProfileReducer }) => {
    return {
      loading: ProfileReducer.loading,
      error: ProfileReducer.error,
      profile: ProfileReducer.profile,
    };
  });

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  if (loading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (error) return <p>Oops Something went wrong</p>;
  return (
    <main>
      {profile.map((el) => (
        <CardProfile
          profile={profile}
          key={el._id}
          id={el._id}
          name={el.name}
          LastName={el.LastName}
          age={el.age}
          email={el.email}
          description={el.description}
          photos={el.photos}
        />
      ))}
    </main>
  );
};
