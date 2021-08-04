import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileHost } from "../store/getShowProfileHostReducer";
import { CardProfileHost } from "../components/CardProfileHost";
import { Spinner} from "react-bootstrap";

export const ShowHostProfile = () => {
  const dispatch = useDispatch();

  const { loading, error, profile } = useSelector(
    ({ getProfileHostReducer }) => {
      return {
        loading: getProfileHostReducer.loading,
        error: getProfileHostReducer.error,
        profile: getProfileHostReducer.profile,
      };
    }
  );

  useEffect(() => {
    dispatch(getProfileHost());
  }, []);

  if (loading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (error) return <p>Oops Something went wrong</p>;
  return (
    <main>
      {
        <CardProfileHost
          profile={profile}
          key={profile._id}
          id={profile._id}
          name={profile.name}
          LastName={profile.LastName}
          age={profile.age}
          email={profile.email}
          description={profile.description}
          profilePhoto={[profile.photos]}
        />
      }
    </main>
  );
};
