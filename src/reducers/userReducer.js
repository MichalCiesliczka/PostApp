import { handleActions } from 'redux-actions';

import { logInUser, logOutUser } from '../actions/user';
import { accessTokenHandler } from '../utils/user';

// Reducer constants
export const IS_LOGGED_IN_KEY = 'isLoggedIn';
export const USER_DATA_KEY = 'userData';

export const USER_REDUCER_KEY = 'user';

const initialState = {
  [IS_LOGGED_IN_KEY]: !!accessTokenHandler.get(),
  [USER_DATA_KEY]: undefined,
};

export default handleActions({
  [logInUser](state, { payload }) {
    return {
      ...state,
      [IS_LOGGED_IN_KEY]: true,
      [USER_DATA_KEY]: payload,
    };
  },
  [logOutUser](state) {
    return {
      ...state,
      [IS_LOGGED_IN_KEY]: false,
      [USER_DATA_KEY]: undefined,
    };
  },
}, initialState);
