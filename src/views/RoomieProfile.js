import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProfile } from "../store/profileReducer";
import { CardProfile } from "../components/CardProfile";
import { NavBarCss } from "../components/NavBarCss";

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
    <div>
      <NavBarCss/>
      <div class="container">
        <br></br>
        <div>
          <h1>Welcome</h1>
        </div>
        <br></br>
        <div class="divider"></div>
        <br></br>

        <CardProfile
          profile={profile}
          key={profile._id}
          id={profile._id}
          name={profile.name}
          LastName={profile.LastName}
          age={profile.age}
          email={profile.email}
          description={profile.description}
        />
      </div>
    </div>
  );
};
