import actionTypes from '../../../constants/action-types';

const alertSuccess = (dispatch, message) => {
  dispatch({
    type: actionTypes.ALERT_SUCCESS,
    payload: message
  });
};


const alertError = (dispatch, message) => {
  dispatch({
    type: actionTypes.ALERT_ERROR,
    payload: message
  });
};

const alertClear = (dispatch) => {
  dispatch({
    type: actionTypes.ALERT_CLEAR
  });
};

export const alertActions = {
  alertSuccess,
  alertError,
  alertClear
};
