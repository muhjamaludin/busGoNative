import {API} from '../../utils/config';
import axios from 'axios';

export const getRoutes = () => async (dispatch) => {
  try {
    const res = await axios.get('http://20.20.20.160:8080/route');
    let routes = res.data.data.map((data, index) => ({
      Id: index,
      Name: `${data.departure} - ${data.destination}`,
      Value: data.id,
    }));
    if (res.data) {
      dispatch({
        type: 'GET_ROUTES',
        payload: res.data,
      });
    } else {
      console.log('data tidak ada');
    }
  } catch (err) {
    console.log(err);
  }
};
