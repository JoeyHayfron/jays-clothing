import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDmmfXSTVRS95SKj901m5GHol5F3-enueg',
  authDomain: 'jaysclothing-41bb0.firebaseapp.com',
  databaseURL: 'https://jaysclothing-41bb0.firebaseio.com',
  projectId: 'jaysclothing-41bb0',
  storageBucket: 'jaysclothing-41bb0.appspot.com',
  messagingSenderId: '428954395430',
  appId: '1:428954395430:web:494b020a1bdd94e46e57e7',
  measurementId: 'G-TNCL750K3T',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
