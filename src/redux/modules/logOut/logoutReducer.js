import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false
};

const map = {
  [`${actionTypes.LOGOUT}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.LOGOUT}${actionTypes.FULFILLED}`]: (state) => ({
    ...state
  }),
  [`${actionTypes.LOGOUT}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    error: true
  })
};


export default function logoutReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
