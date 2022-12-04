import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCriN-fBKzJgNhSTNlN_SpVM27ZUjjdf2M",
    authDomain: "micro-grown-db.firebaseapp.com",
    projectId: "micro-grown-db",
    storageBucket: "micro-grown-db.appspot.com",
    messagingSenderId: "709673255201",
    appId: "1:709673255201:web:6858f28c6f17064e6f7e60"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);