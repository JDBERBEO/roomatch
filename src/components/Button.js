import { useDispatch } from "react-redux";
import { increment } from "../store/CounterReducer";

function Button() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }
  return (
    <button type="button" onClick={handleClick}>
      Increment
    </button>
  );
}
export default Button;
