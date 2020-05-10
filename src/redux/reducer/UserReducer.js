const initialState = {
  isLoading: false,
  users: [],
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case 'GET_USER_BY_ID':
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}
