import firebase from 'firebase/app';
//we need this base import because that keyword is going to 
//give us access to firestore and auth when we import them. 
//They will be autonatically attached to 
//this firebase keyword.
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDULt-diMkcUSgyiiXba7_aqOZixRgoepI",
    authDomain: "crwn-db-87e72.firebaseapp.com",
    databaseURL: "https://crwn-db-87e72.firebaseio.com",
    projectId: "crwn-db-87e72",
    storageBucket: "crwn-db-87e72.appspot.com",
    messagingSenderId: "791867885572",
    appId: "1:791867885572:web:5c8f2fa7fad42b4569cd51",
    measurementId: "G-XNQ7K7LE3Z"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;