import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { USER_REDUCER_KEY } from '../reducers/selectors/userSelectors';
import userReducer from '../reducers/userReducer';

export default combineReducers({
  [USER_REDUCER_KEY]: userReducer,
  routing: routerReducer
});
