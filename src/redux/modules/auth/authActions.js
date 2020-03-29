import axios from 'axios';

import actionTypes from '../../../constants/action-types';
import { API_URL } from '../../../config/index';

export const init = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_TOKEN,
    payload: axios.post(`${API_URL}auth/login`, {
      phone: '+998123456789',
      password: 'admin'
    })
  });
};
