import actionTypes from '../../../constants/action-types';

export const alertSuccess = (dispatch, message) => {
  dispatch({
    type: actionTypes.ALERT_SUCCESS,
    payload: message
  });
};


export const alertError = (dispatch, message) => {
  dispatch({
    type: actionTypes.ALERT_ERROR,
    payload: message
  });
};

export const alertClear = (dispatch) => {
  dispatch({
    type: actionTypes.ALERT_CLEAR
  });
};
