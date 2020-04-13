// import {
//   LOAD_ROUTES,
//   UPDATE_CALENDAR_TO_STATE,
//   ERROR_SCHEDULES,
//   LOAD_SCHEDULES,
//   SET_LOADING_SCHEDULES,
// } from '../actions/actions';

const initialState = {
  schedules: [],
};

const schedulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCHEDULES': {
      return {
        ...state,
        schedules: action.payload,
      };
    }
    default:
      return state;
  }
};
export default schedulesReducer;
