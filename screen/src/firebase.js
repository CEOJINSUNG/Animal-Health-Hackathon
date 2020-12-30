import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyABX42B_fbT2Xdl58Xn4t7nc6K3xkW-d5A",
    authDomain: "dangcare-d9f7a.firebaseapp.com",
    databaseURL: "https://dangcare-d9f7a.firebaseio.com",
    projectId: "dangcare-d9f7a",
    storageBucket: "dangcare-d9f7a.appspot.com",
    messagingSenderId: "468687058971",
    appId: "1:468687058971:web:bc9858bb0a7da823af20be",
    measurementId: "G-8B7YKEEYC3"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : "select_account"})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;