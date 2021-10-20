import {initializeApp} from'firebase/app';
import { getAuth } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
const config = {
    apiKey: "AIzaSyBzqQRyr6GMQ3ofAcVPnv2-oj_ETZfhn58",
    authDomain: "crwn-db-1fada.firebaseapp.com",
    projectId: "crwn-db-1fada",
    storageBucket: "crwn-db-1fada.appspot.com",
    messagingSenderId: "824954639684",
    appId: "1:824954639684:web:427f91b787c8b4d0a93311",
    measurementId: "G-BHHVN46C11"
};

const firebaseApp = initializeApp(config);

export const auth = getAuth(firebaseApp);
// const firestore=getFirestore(firebaseApp);
export const provider =new GoogleAuthProvider();

provider.setCustomParameters({'login_hint': 'user@example.com'});
export const SignInWithGoogle=()=> 
{
    signInWithPopup(auth,provider)
    .catch(function(error)
    { const errorCode= error.code;
    console.log(errorCode)
    const errorMessage=error.message;
    console.log(errorMessage)
    }
    )
}