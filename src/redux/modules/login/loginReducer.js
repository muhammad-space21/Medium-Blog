import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  token: '',
  loggedin: false
};

const map = {
  [`${actionTypes.LOGIN}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true,
    loggedin: false
  }),
  [`${actionTypes.LOGIN}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    token: payload.data,
    loggedin: true
  }),
  [`${actionTypes.LOGIN}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true,
    loggedin: false
  })
};

export default function loginReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
