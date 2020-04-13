// import {
//   SET_LOADING_SCHEDULES,
//   UPDATE_CALENDAR_TO_STATE,
//   LOAD_SCHEDULES,
//   LOAD_ROUTES,
// } from './actions';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API} from '../../utils/config';

AsyncStorage.getItem('token', (err, result) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${result}`;
});

// export const setDate = (selectedDate) => async (dispatch) => {
//   try {
//     dispatch({
//       type: UPDATE_CALENDAR_TO_STATE,
//       payload: selectedDate,
//     });
//   } catch (error) {
//     console.log('Heloo', error);
//   }
// };

export const getSchedules = () => async (dispatch) => {
  try {
    const res = await axios.get(API.API_BACKEND.concat('schedule'));
    if (res.data.data) {
      dispatch({
        type: 'GET_SCHEDULES',
        payload: res.data.data,
      });
    } else {
      console.log('Data tidak tersedia');
    }
  } catch (err) {
    console.log(err);
  }
};

// export const setLoading = () => {
//   return {
//     action: SET_LOADING_SCHEDULES,
//   };
// };
