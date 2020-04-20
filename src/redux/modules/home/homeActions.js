import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { getHeaders } from '../../../utils';

import { API_URL } from '../../../config';

export const getHome = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_HOME,
    payload: axios({
      method: 'GET',
      url: `${API_URL}/home`,
      headers: getHeaders(getState)
    })
  });
};
