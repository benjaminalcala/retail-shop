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

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth)
      }, reject)
    })
  }

  export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
      const {title, items} = doc.data();
      return {
        title,
        items,
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id
      }
    })

    return transformedCollections.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }

  export const addCollectionAndDocuments =  async (collectionKey, objectsToAdd) => {
    const batch = firestore.batch();

    const collectionRef = firestore.collection(collectionKey);
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)

    })

    await batch.commit();

  }

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

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


  export default firebase;
