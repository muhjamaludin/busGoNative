import {API} from '../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
axios.defaults.headers.common.Authorization = `Bearer ${AsyncStorage.getItem(
  'token',
)}`;

export const getRoutebyId = (limit, token) => async (dispatch) => {
  try {
    const res = await axios.get(
      API.API_BACKEND.concat(`route/?limit=${limit}`),
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    dispatch({
      type: 'GET_ROUTE_BY_ID',
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
