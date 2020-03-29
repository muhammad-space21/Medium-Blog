import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  list: null
};

const map = {
  [`${actionTypes.GET_NAVBAR}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_NAVBAR}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    list: payload.data
  }),
  [`${actionTypes.GET_TOKEN}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function navbarReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
