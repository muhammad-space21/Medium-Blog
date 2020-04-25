import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { API_URL } from '../../../config';
import { getHeaders } from '../../../utils';

export const signUp = (user) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SIGNUP,
    payload: axios({
      method: 'POST',
      url: `${API_URL}/users`,
      headers: getHeaders(getState),
      body: JSON.stringify(user)
    })
  });
};
