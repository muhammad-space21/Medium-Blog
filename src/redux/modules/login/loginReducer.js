import actionTypes from '../../../constants/action-types';

const initialState = {
  loading: false,
  error: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOGIN_REQUEST:
    return {
      loading: true,
      error: false,
      user: action.payload
    };
  case actionTypes.LOGIN_SUCCESS:
    return {
      loading: false,
      error: false,
      user: action.payload
    };
  case actionTypes.LOGIN_FAILURE:
    return {
      loading: false,
      error: true,
      user: action.payload
    };
  default:
    return state;
  }
};

export default loginReducer;
