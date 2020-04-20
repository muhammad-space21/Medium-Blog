import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { getHeaders } from '../../../utils';

export const getHome = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_HOME,
    payload: axios({
      method: 'GET',
      url: '/home',
      headers: getHeaders(getState)
    })
  });
};
