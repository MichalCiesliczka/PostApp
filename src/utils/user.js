const accessTokenStorageType = sessionStorage;
const accessTokenStorageKey = 'accessToken';

export const accessTokenHandler = {
  save(token) {
    accessTokenStorageType.setItem(accessTokenStorageKey, token);
  },
  get() {
    return accessTokenStorageType.getItem(accessTokenStorageKey);
  },
  remove() {
    accessTokenStorageType.removeItem(accessTokenStorageKey);
  },
  getTokenFromFirebase(userObject) {
    const { credential: { accessToken } } = userObject;

    return accessToken;
  }
};

export default {
  accessTokenHandler,
};
