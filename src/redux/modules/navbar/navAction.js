import axios from 'axios';

import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';


export const getNav = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_NAVBAR,
    payload: axios({
      method: 'GET',
      url: '/categories',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4NTM5OTgwMn0.pgQPiGAyLtQmQv9xwsVyGXCAYd8IRngcUYHRXcl27ac'

      }
    })
  });
};
