import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { API_URL } from '../../../config';
import { getHeaders } from '../../../utils/index';
import { alertActions } from '../alerts/alert.Actions';

export const signUpRequest = () => (dispatch, getState, user) => {
  dispatch({
    type: actionTypes.SIGNUP_REQUEST,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/users`,
      headers: getHeaders(getState),
      body: JSON.stringify(user)
    })
  });
};

export const signUpSuccess = () => (dispatch) => {
  dispatch({
    type: actionTypes.SIGNUP_SUCCESS,
    payload: alertActions.alertSuccess('You signed up successfully')
  });
};

export const signUpFailure = () => (dispatch, message) => {
  dispatch({
    type: actionTypes.SIGNUP_FAILURE,
    payload: alertActions.alertError(message.toString())
  });
};
