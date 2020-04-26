import actionTypes from '../../../constants/action-types';


export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
    payload: localStorage.removeItem('token')
  });
};
