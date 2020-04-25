import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { API_URL } from '../../../config';
import { getHeaders } from '../../../utils';


export const login = (phone, password) => (dispatch, getState) => {
  const response = dispatch({
    type: actionTypes.LOGIN,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/auth/login`,
      headers: getHeaders(getState),
      body: JSON.stringify({ phone, password })
    })
  });


  response.then((res) => {
    if (res && res.value && res.value.data && res.value.data.token) {
      localStorage.setItem('token', res.value.data.token);
    }
  });
};
