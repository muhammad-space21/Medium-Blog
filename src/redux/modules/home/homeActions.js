import axios from 'axios';
import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const getHome = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_HOME,
    payload: axios({
      method: 'GET',
      url: `${API_URL}/home`,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4NzEwNzQ4Nn0.T8yoq8G6UqYnJD-IbCiI91FOnGbN1q9vwKn2hKgE3f4'
      }
    })
  });
};
