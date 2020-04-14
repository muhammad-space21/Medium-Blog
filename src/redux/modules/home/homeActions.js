import axios from 'axios';
import actionTypes from '../../../constants/action-types';

export const getHome = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_HOME,
    payload: axios({
      method: 'GET',
      url: '/home',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4Njg2MTkxOH0.iFvukzsPRzzPteD-2Yv6QcJaiYbUaPe1kLFn8WWozbU'
      }
    })
  });
};
