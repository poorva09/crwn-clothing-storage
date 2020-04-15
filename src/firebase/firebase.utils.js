import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCgF1_FPdScSELRv_gNt3QOgyX9QHNKyaU",
  authDomain: "crwn-db-c1062.firebaseapp.com",
  databaseURL: "https://crwn-db-c1062.firebaseio.com",
  projectId: "crwn-db-c1062",
  storageBucket: "crwn-db-c1062.appspot.com",
  messagingSenderId: "1038378049868",
  appId: "1:1038378049868:web:696f38aed136d22a59efe9",
  measurementId: "G-8G3H7RK9CM"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;