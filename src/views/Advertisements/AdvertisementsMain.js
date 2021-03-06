import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { filterPost } from "../../store/FilterReducer";
import { Advertisements } from "./Advertisements";
import queryString from "query-string";
import swal from "sweetalert";
import { NoCoindencies } from "./NoCoinciden";
import { Spinner} from "react-bootstrap";

function AdvertisementsMain() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { filterError, ads, filterLoading } = useSelector((state) => {
    return {
      loading: state.getAdsReducer.loading,
      error: state.getAdsReducer.error,
      ads: state.filterPostReducer.ads,
      filterLoading: state.filterPostReducer.filterLoading,
      filterError: state.filterPostReducer.filterError,
      city: state.filterPostReducer.city,
      selectedDays: state.filterPostReducer.selectedDays,
    };
  });

  function useQueryCity() {
    return new URLSearchParams(location.search).get("city");
  }

  const city = useQueryCity();

  const handleQueryString = () => {
    let selectedDaysString = queryString.parse(location.search);
    return selectedDaysString.selectedDays.split(",");
  };

  const selectedDays = handleQueryString();

  useEffect(() => {
    dispatch(filterPost(city, selectedDays, history));
  }, []);

  if (filterLoading) return (<div><Spinner animation="border" variant="danger" /> <h1 className="text-pink">Loading so Fast</h1></div>);
  if (filterError) return <p>Oops Something went wrong</p>;

  const handleSelect = (id) => {
    if (localStorage.getItem("token")) {
      history.push(`/advertisement/${id}`);
    } else {
      swal(
        "Please Login as a Roomie",
        "If you don't have an user, please sign up",
        "error"
      );
    }
  };

  return (
    <main>
      {!!ads && ads.length > 0 ? (
        <Advertisements ads={ads} handleSelect={handleSelect} />
      ) : (
        <NoCoindencies />
      )}
    </main>
  );
}

export default AdvertisementsMain;
