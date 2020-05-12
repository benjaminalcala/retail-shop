import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDl4mUy6tHZ1NlSg4QFyOH0OBtIRgO0UiQ",
    authDomain: "retail-shop-db.firebaseapp.com",
    databaseURL: "https://retail-shop-db.firebaseio.com",
    projectId: "retail-shop-db",
    storageBucket: "retail-shop-db.appspot.com",
    messagingSenderId: "738062498257",
    appId: "1:738062498257:web:6eecbf82feb6b969f208f0",
    measurementId: "G-MSHPRKVRQ7"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
      
    } 

    return userRef;

  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
