import axios from 'axios';

import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';

export const getNav = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_NAVBAR,
    payload: axios({
      method: 'GET',
      url: '/categories',
      headers: getHeaders(getState)
    })
  });
};
