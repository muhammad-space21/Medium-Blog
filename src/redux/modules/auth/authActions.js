import axios from 'axios';

import actionTypes from '../../../constants/action-types';

export const init = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_TOKEN,
    payload: axios.post('/auth/login', {
      phone: '+998123456789',
      password: 'admin'
    })
  });
};
