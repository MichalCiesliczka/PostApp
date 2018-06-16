import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

const firebaseObj = firebase.initializeApp(firebaseConfig);

// TODO: Change DB name
export const firebaseDB = firebaseObj.database().ref('test');
export const firebaseGoogleAuth = new firebase.auth.GoogleAuthProvider();

export default firebaseObj;
