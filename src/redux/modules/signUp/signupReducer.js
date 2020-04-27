import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  token: ''
};


const map = {
  [`${actionTypes.SIGNUP}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.SIGNUP}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    token: payload.data
  }),
  [`${actionTypes.SIGNUP}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    error: true
  })
};

export default function signupReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
