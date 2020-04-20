import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  home: {}
};

const map = {
  [`${actionTypes.GET_HOME}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_HOME}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: false,
    home: payload.data
  }),
  [`${actionTypes.GET_HOME}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function singleArticleReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
