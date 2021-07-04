import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAds } from "../../store/getAdsReducer";
import { Advertisements } from "./Advertisements";

function AdvertisementsMain() {
  const history = useHistory()
  const dispatch = useDispatch();

  const { loading, error, ads } = useSelector(({ getAdsReducer }) => {
    return {
      loading: getAdsReducer.loading,
      error: getAdsReducer.error,
      ads: getAdsReducer.ads,
    };
  });

  useEffect(() => {
    dispatch(getAds());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops Something went wrong</p>;

  const handleSelect = (id) => {
    console.log('this is id: ', id)
		history.push(`/advertisement/${id}`)
	}

  return (
    <main>
      <Advertisements ads={ads} handleSelect={handleSelect}/>
    </main>
  );
}

export default AdvertisementsMain;
