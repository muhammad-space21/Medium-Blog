import actionTypes from '../../../constants/action-types';
import alert from '../alerts/alertActions';

const defaultState = {
  loading: false,
  error: false,
  token: '',
  alert: {}
};


const map = {
  [`${actionTypes.SIGNUP}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.SIGNUP}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    token: payload.data,
    alert: alert('You signed up successfully')
  }),
  [`${actionTypes.SIGNUP}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    error: true,
    alert: alert(toString())
  })
};

export default function signupReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
