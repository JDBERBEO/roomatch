import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getProfile } from "../store/getShowProfileReducer";
import { CardProfile } from '../components/CardProfile'


export const RoomieProfile = () => {
  const history = useHistory()
  const dispatch = useDispatch();

  const { loading, error, profile } = useSelector(({ getProfileReducer }) => {
    return {
      loading: getProfileReducer.loading,
      error: getProfileReducer.error,
      profile: getProfileReducer.profile,
    };
  });

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (loading) return <p>Loading...</p>;
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
          description={profile.description}
        />
      }
    </main>
  );
}

