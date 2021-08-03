import { AdsListsHost } from "../components/getAdsHost";
import { imgAdds } from "../Mock_data/imgsAdd";
import { useSelector, useDispatch } from "react-redux";
import { getAdvertisements } from "../store/getAdvertisementsReducer";
import { useEffect } from "react";
import {deleteAdvertisement} from "../store/getAdvertisementsReducer"

export function MyAdvertisements() {
  const dispatch = useDispatch();

  const { loading_ad, error_ad, hostAdvertisements } = useSelector(
    ({ getAdvertisementsReducer }) => {
      return {
        loading_ad: getAdvertisementsReducer.loading_ad,
        error_ad: getAdvertisementsReducer.error_ad,
        hostAdvertisements: getAdvertisementsReducer.hostAdvertisements,
      };
    }
  );
  const handleDelete =(adverId)=>{
    dispatch(deleteAdvertisement(adverId))
  }

  useEffect(() => {
    dispatch(getAdvertisements());
  }, []);

  console.log('hostAdvertisements', hostAdvertisements )
  if (loading_ad) return <p>Loading...</p>;
  if (error_ad) return <p>Oops Something went wrong</p>;

  return (
    <div>
      <h1>My Advertisements</h1>
      {!!hostAdvertisements && hostAdvertisements.length > 0 && hostAdvertisements.map((el) => (
        <AdsListsHost
          hostAdvertisements={hostAdvertisements}
          key={el._id}
          id={el._id}
          living_space={el.living_space}
          price={el.price}
          description={el.description}
          photos={el.photos}
          city={el.city}
          bathroom={el.bathroom}
          facilities={el.facilities}
          house_rules={el.house_rules}
          parking={el.parking}
          private_bathroom={el.private_bathroom}
          rooms={el.rooms}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
