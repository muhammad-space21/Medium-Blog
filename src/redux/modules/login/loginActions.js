import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import alertActions from '../alerts/alertActions';
import { API_URL } from '../../../config';
import { getHeaders } from '../../../utils';


export const loginRequest = () => (dispatch, phone, password) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/auth/login`,
      headers: getHeaders(),
      body: JSON.stringify({ phone, password })
    }).then((user) => localStorage.setItem('user', JSON.stringify(user)))
  });
};

export const loginSuccess = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_SUCCESS,
    payload: alertActions.alertSuccess('You logged in successfully')
  });
};

export const loginFailure = () => (dispatch, message) => {
  dispatch({
    type: actionTypes.LOGIN_FAILURE,
    payload: alertActions.alertError(message.toString())
  });
};
