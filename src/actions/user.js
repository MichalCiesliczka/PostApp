import { createAction } from 'redux-actions';

export const logInUser = createAction('USER/LOG_IN', userData => userData);
export const logOutUser = createAction('USER/LOG_OUT', () => {});

export default {
  logInUser,
  logOutUser,
};
