const accessTokenStorageType = sessionStorage;
const accessTokenStorageKey = 'accessToken';

export const accessTokenHandler = {
  storageType: accessTokenStorageType,
  set storage(storageType) {
    this.storageType = storageType;
  },
  get storage() {
    return this.storageType;
  },
  save(token) {
    this.storageType.setItem(accessTokenStorageKey, token);
  },
  get() {
    return this.storageType.getItem(accessTokenStorageKey);
  },
  remove() {
    this.storageType.removeItem(accessTokenStorageKey);
  },
  getTokenFromFirebase({ credential: { accessToken } }) {
    return accessToken;
  }
};

export default {
  accessTokenHandler,
};
