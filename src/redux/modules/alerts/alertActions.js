import actionTypes from '../../../constants/action-types';

const alert = (message) => (dispatch) => {
  dispatch({
    type: actionTypes.ALERT,
    payload: message
  });
};

export default alert;
