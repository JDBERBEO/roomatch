import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../store/getAdsReducer";

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

  console.log("this is ads: ", ads);

  return (
    <main>
      {!!ads &&
        ads.length > 0 &&
        ads.map((ad) => {
          return (
            <article key={ad.id}>
              <h1>{ad.description}</h1>
              <p>{ad.price}</p>
              <p>{ad.living_space}</p>
              <p>{ad.house_rules}</p>
            </article>
          );
        })}
    </main>
  );
}

export default AdvertisementsMain;
