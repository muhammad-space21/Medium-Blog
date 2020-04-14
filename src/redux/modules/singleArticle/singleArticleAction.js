import axios from 'axios';

import actionTypes from '../../../constants/action-types';

export const getArticle = (slug) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_ARTICLE,
    payload: axios({
      method: 'GET',
      url: `/articles/${slug}`,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4NjYxMjEzOH0.7NEkf_Z75yil0amtv_SeNMrzWkPAxA8PkLE2eiWYNeY'

      }
    })
  });
};
