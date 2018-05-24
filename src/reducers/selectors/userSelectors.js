import {
  USER_REDUCER_KEY,
  IS_LOGGED_IN_KEY,
  USER_DATA_KEY,
} from '../userReducer';

export const isUserLoggedIn = (store => store[USER_REDUCER_KEY][IS_LOGGED_IN_KEY]);

export const getUserData = (store => store[USER_REDUCER_KEY][USER_DATA_KEY]);

export default {
  isUserLoggedIn,
  getUserData,
};
