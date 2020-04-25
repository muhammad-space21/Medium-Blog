import { combineReducers } from 'redux';
import {
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  loginReducer,
  signupReducer,
  alertReducer
} from '../modules';


export default combineReducers({
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  loginReducer,
  signupReducer,
  alertReducer
});
