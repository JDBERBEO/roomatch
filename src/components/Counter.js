import { useSelector } from "react-redux";
import CounterReducer from "../store/CounterReducer";

function Counter() {
  const { count } = useSelector(({ CounterReducer }) => {
    // console.log("estos es state count: ", CounterReducer.count);
    return {
      count: CounterReducer.count,
    };
  });

  return <p>cuenta:{count}</p>;
}

export default Counter;
