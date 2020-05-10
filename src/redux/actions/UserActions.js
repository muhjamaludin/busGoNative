import {API} from '../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
axios.defaults.headers.common.Authorization = `Bearer ${AsyncStorage.getItem(
  'token',
)}`;

export const getUserbyId = (id, token) => async (dispatch) => {
  console.log('asyn', AsyncStorage.getItem('token'));
  try {
    const res = await axios.get(API.API_BACKEND.concat(`users/${id}`), {
      headers: {Authorization: `Bearer ${token}`},
    });
    dispatch({
      type: 'GET_USER_BY_ID',
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
