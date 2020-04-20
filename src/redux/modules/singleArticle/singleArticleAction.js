import axios from 'axios';

import actionTypes from '../../../constants/action-types';
import { getHeaders } from '../../../utils';

export const getArticle = (slug) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_ARTICLE,
    payload: axios({
      method: 'GET',
      url: `/articles/${slug}`,
      headers: getHeaders(getState)
    })
  });
};
