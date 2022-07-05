import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
});
