import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = (values, id) => async dispatch => {
  const res = await axios.put(`http://localhost:5000/api/user/${id}`, values);

  dispatch({ type: FETCH_USER, payload: res.data });
};
