import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../store/getAdsReducer";
import { Advertisements } from "./Advertisements";

function AdvertisementsMain() {
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

  return (
    <main>
      <Advertisements ads={ads} />
    </main>
  );
}

export default AdvertisementsMain;
