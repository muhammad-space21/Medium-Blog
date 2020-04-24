import actionTypes from '../../../constants/action-types';

const initialState = {
  loading: false,
  error: false
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SIGNUP_REQUEST:
    return {
      loading: true,
      error: false,
      user: action.payload
    };
  case actionTypes.SIGNUP_SUCCESS:
    return {
      loading: false,
      error: false,
      user: action.payload
    };
  case actionTypes.SIGNUP_FAILURE:
    return {
      loading: false,
      error: true,
      user: action.payload
    };
  default:
    return state;
  }
};

export default signUpReducer;
