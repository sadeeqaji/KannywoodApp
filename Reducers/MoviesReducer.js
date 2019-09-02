const InitialState = {
  Movies: [],
  Error: ""
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case "Movies_Container":
      return { ...state, Movies: action.payload };
    case "ERROR_FETCHING":
      return { ...state, Error: "Error fetching the Movies" };
    default:
      return state;
  }
};
