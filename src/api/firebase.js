import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

const firebaseObj = firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebaseObj.database().ref('test');

export default firebaseObj;
