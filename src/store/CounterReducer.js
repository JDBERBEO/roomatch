export const INCREMENT = "INCREMENT_COUNT";
export function increment() {
  return {
    type: INCREMENT,
  };
}
const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
