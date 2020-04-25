import actionTypes from '../../../constants/action-types';

const alert = (dispatch, message) => {
  dispatch({
    type: actionTypes.ALERT,
    payload: message
  });
};

export default alert;
