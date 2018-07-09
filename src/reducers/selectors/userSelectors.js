// Reducer constants
export const IS_LOGGED_IN_KEY = 'isLoggedIn';
export const USER_DATA_KEY = 'userData';

export const USER_REDUCER_KEY = 'user';

export const isUserLoggedIn = (store => store[USER_REDUCER_KEY][IS_LOGGED_IN_KEY]);

export const getUserData = (store => store[USER_REDUCER_KEY][USER_DATA_KEY]);

export default {
  isUserLoggedIn,
  getUserData,
};
