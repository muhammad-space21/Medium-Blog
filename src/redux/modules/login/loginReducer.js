import actionTypes from '../../../constants/action-types';
import alert from '../alerts/alertActions';

const defaultState = {
  loading: false,
  error: false,
  token: '',
  alert: {}
};

const map = {
  [`${actionTypes.LOGIN}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.LOGIN}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    token: payload.data,
    alert: alert('You logged in successfully')
  }),
  [`${actionTypes.LOGIN}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true,
    alert: alert(toString())
  })
};

export default function loginReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
