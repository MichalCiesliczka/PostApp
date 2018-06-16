import { createAction } from 'redux-actions';

export const markAppAsLoaded = createAction('APP_LOADED', () => {});

const appActions = {
  markAppAsLoaded
};

export default appActions;
