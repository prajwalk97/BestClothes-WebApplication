
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBzqQRyr6GMQ3ofAcVPnv2-oj_ETZfhn58",
    authDomain: "crwn-db-1fada.firebaseapp.com",
    projectId: "crwn-db-1fada",
    storageBucket: "crwn-db-1fada.appspot.com",
    messagingSenderId: "824954639684",
    appId: "1:824954639684:web:427f91b787c8b4d0a93311",
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'login_hint': 'user@example.com'});
export const SignInWithGoogle=()=> 
{
    auth.signInWithPopup(provider)
    .catch(function(error)
    { const errorCode= error.code;
    console.log(errorCode)
    const errorMessage=error.message;
    console.log(errorMessage)
    }
    )
}

export default firebase;