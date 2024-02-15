import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDpbbFJLFlSONj_iO1_Qb0se9-t2fqyoBw",
    authDomain: "crwn-clothing-db-863be.firebaseapp.com",
    projectId: "crwn-clothing-db-863be",
    storageBucket: "crwn-clothing-db-863be.appspot.com",
    messagingSenderId: "912630037039",
    appId: "1:912630037039:web:a76b0667a936d83cb124da"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email, 
                createdAt
            });
        }catch(error){
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
  };