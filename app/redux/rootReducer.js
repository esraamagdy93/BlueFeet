import authReducer from '../modules/scenes/auth/scenes/reducer';
import homeReducer from '../modules/scenes/home/reducer';

import { combineReducers } from 'redux';

export default rootReducer = combineReducers({
  authReducer,
  homeReducer
})