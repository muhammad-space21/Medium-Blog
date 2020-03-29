import { combineReducers } from 'redux';
import {
  authReducer,
  navReducer
} from '../modules';


export default combineReducers({
  authReducer,
  navReducer
});
