/* eslint-env jest */
import { accessTokenHandler } from './user';

describe('accessTokenHandler()', () => {
  const accessToken = 'secretAccessToken';
  const storageTokenKey = 'accessToken';

  accessTokenHandler.storage = sessionStorage;

  it('should return proper storage name', () => {
    expect(accessTokenHandler.storage).toBe(sessionStorage);
  });

  it('should save access token to storage', () => {
    accessTokenHandler.save(accessToken);

    expect(sessionStorage.getItem(storageTokenKey)).toBe(accessToken);
  });

  it('should get saved access token from storage', () => {
    accessTokenHandler.save(accessToken);

    expect(accessTokenHandler.get()).toBe(accessToken);
  });

  it('should remove once saved access token from storage', () => {
    accessTokenHandler.save(accessToken);
    expect(accessTokenHandler.get()).toBe(accessToken);

    accessTokenHandler.remove();
    expect(accessTokenHandler.get()).toBeUndefined();
  });

  it('should get token from Firebase user object', () => {
    const FirebaseUserObject = {
      user: {
        displayName: 'Example User',
      },
      credential: {
        idToken: 'myIdToken',
        accessToken: 'myAccessToken',
      },
      additionalUserInfo: {},
      operationType: 'signIn'
    };

    expect(accessTokenHandler.getTokenFromFirebase(FirebaseUserObject)).toBe('myAccessToken');
  });
});
