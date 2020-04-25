import actionTypes from '../../../constants/action-types';


const map = {
  [`${actionTypes.ALERT}${actionTypes.FULFILLED}`]: (payload) => ({
    type: 'alert-success',
    message: payload.message
  }),
  [`${actionTypes.ALERT}${actionTypes.REJECTED}`]: (payload) => ({
    type: 'alert-danger',
    message: payload.message
  })
};

export default function alertReducer(state = {}, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
