import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProfile } from "../store/profileReducer";
import { CardProfile } from "../components/CardProfile";

export const RoomieProfile = () => {
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

  if (loading) return <p>Loading lo mas rapidooo...</p>;
  if (error) return <p>Oops Something went wrong</p>;
  return (
    <main>
      {
        <CardProfile
          profile={profile}
          key={profile._id}
          id={profile._id}
          name={profile.name}
          LastName={profile.LastName}
          age={profile.age}
          email={profile.email}
          description={profile.description}
          profilePhoto={profile.profilePhoto}
        />
      }
    </main>
  );
};
