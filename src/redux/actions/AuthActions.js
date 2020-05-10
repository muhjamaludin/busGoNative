import {SET_LOGIN, ERROR_LOGIN, SET_LOADING_AUTH, SET_LOGOUT} from './actions';
import {ToastAndroid} from 'react-native';
import {API} from '../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const setLogin = (data) => async (dispatch) => {
  try {
    console.log(data);
    const res = await axios.post(API.API_BACKEND.concat('auth/login'), data);
    if (res.data.token) {
      await AsyncStorage.setItem('token', res.data.token);
      dispatch({
        type: SET_LOGIN,
        payload: res.data,
      });
      return true;
    } else {
      ToastAndroid.show('Wrong Username or Password', ToastAndroid.SHORT);
      console.log('Login failed');
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const setLogout = () => {
  AsyncStorage.removeItem('token');
  return {
    type: SET_LOGOUT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING_AUTH,
  };
};

export const setError = (err) => {
  return {
    type: ERROR_LOGIN,
    payload: err,
  };
};

export const loginFailed = (code) => {
  console.log('this error from authentication', code);
};
