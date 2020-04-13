// import {
//   SET_LOADING_AUTH,
//   SET_LOGIN,
//   SET_LOGOUT,
//   ERROR_LOGIN,
// } from '../actions/actions';

const initialState = {
  isLogin: false,
  error: null,
  isLoading: false,
  data: [],
  token: null,
  register: {},
  verification: {},
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_LOGIN': {
      return {
        ...state,
        isLogin: true,
        data: payload,
      };
    }
    case 'SET_LOADING_AUTH': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SET_LOGOUT': {
      return {
        ...state,
        isLogin: false,
      };
    }
    case 'IS_REGISTER': {
      return {
        ...state,
        register: action.payload,
        isLoading: true,
      };
    }
    case 'IS_VERIFICATION': {
      return {
        ...state,
        verification: action.payload,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
