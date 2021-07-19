import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { filterPost } from "../../store/FilterReducer";
import { Advertisements } from "./Advertisements";

function AdvertisementsMain() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading, error, ads } = useSelector((state) => {
    return {
      loading: state.getAdsReducer.loading,
      error: state.getAdsReducer.error,
      ads: state.filterPostReducer.ads,
    };
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops Something went wrong</p>;

  const handleSelect = (id) => {
    history.push(`/advertisement/${id}`);
  };

  return (
    <main>
      <Advertisements ads={ads} handleSelect={handleSelect} />
    </main>
  );
}

export default AdvertisementsMain;
