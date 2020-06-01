const initialState = {
  isLoading: false,
  routes: [],
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case 'GET_ROUTE_BY_ID':
      return {
        ...state,
        routes: payload,
      };
    default:
      return state;
  }
}
