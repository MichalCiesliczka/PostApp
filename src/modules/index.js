import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer, { USER_REDUCER_KEY } from '../reducers/userReducer';

export default combineReducers({
  [USER_REDUCER_KEY]: userReducer,
  routing: routerReducer
});
