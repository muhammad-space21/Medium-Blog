import axios from 'axios';

import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';

export const getRecommendedArticles = ({
  categoryId, filter, sortDr, page, limit
}) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_CATEGORY_RECOMMENDED,
    payload: axios({
      method: 'GET',
      url: `/categories/${categoryId}/articles?${filter}=${sortDr}&page=${page}&limit=${limit}`,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4NTM5OTgwMn0.pgQPiGAyLtQmQv9xwsVyGXCAYd8IRngcUYHRXcl27ac'

      }
    })
  });
};

export const getArticles = ({
  categoryId,
  filter,
  sortDr,
  page,
  limit
}) => (dispatch, getState) => {
  const obj = {
    categoryId,
    filter,
    sortDr,
    page,
    limit
  };
  const prevParams = getState().articlesReducer.params;
  if (prevParams && (prevParams.categoryId !== categoryId || prevParams.filter !== filter)) {
    dispatch({
      type: actionTypes.CLEAR_DATA
    });
  }
  dispatch({
    type: actionTypes.CATEGORY_PARAMS,
    payload: {
      categoryId,
      filter,
      sortDr,
      page,
      limit
    }
  });
  if (JSON.stringify(obj) !== JSON.stringify(prevParams)) {
    dispatch({
      type: actionTypes.GET_CATEGORY,
      payload: axios({
        method: 'GET',
        url: `/categories/${categoryId}/articles?${filter}=${sortDr}&page=${page}&limit=${limit}`,
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4NTM5OTgwMn0.pgQPiGAyLtQmQv9xwsVyGXCAYd8IRngcUYHRXcl27ac'

        }
      })
    });
  }
};
