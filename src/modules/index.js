import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from '../reducers/appReducer';

export default combineReducers({
  appReducer,
  routing: routerReducer
});
