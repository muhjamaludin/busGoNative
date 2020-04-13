const initialState = {
  routes: [],
};

const routesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ROUTES': {
      return {
        ...state,
        routes: action.payload,
      };
    }
    default:
      return state;
  }
};
export default routesReducer;
