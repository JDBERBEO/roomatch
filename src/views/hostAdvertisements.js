import { AdsListsHost } from "../components/getAdsHost";
import { imgAdds } from "../Mock_data/imgsAdd";
import { useSelector, useDispatch } from "react-redux";
import { getAdvertisements } from "../store/getAdvertisementsReducer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


export function MyAdvertisements(){
const history = useHistory();
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

//   const handleSelect = (id) => {
//     history.push(`/advertisements/${id}`);
//   };

  useEffect(() => {
    dispatch(getAdvertisements());
  }, []);
  if (loading_ad) return <p>Loading...</p>;
  if (error_ad) return <p>Oops Something went wrong</p>;

 return( 
    <div>
        <h1>My Advertisements</h1>
          {hostAdvertisements.map((el) => (
            <AdsListsHost
              hostAdvertisements={hostAdvertisements}
              key={el._id}
              id={el._id}
              living_space={el.living_space}
              price={el.price}
              description={el.description}
              array={imgAdds}
            //   handleSelect={handleSelect}
            />
          ))}
</div>
 )
}

