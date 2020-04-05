import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  articles: []
//   categoryId: undefined
};

const map = {
  [`${actionTypes.GET_CATEGORY}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_CATEGORY}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    articles: payload.data
  }),
  [`${actionTypes.GET_CATEGORY}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function navbarReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
