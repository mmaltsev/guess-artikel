// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCN1jAV6XM2Mu04NQKbrnRdTBUmlbt68qA',
  authDomain: 'guess-artikel-df92e.firebaseapp.com',
  projectId: 'guess-artikel-df92e',
  storageBucket: 'guess-artikel-df92e.firebasestorage.app',
  messagingSenderId: '620058445357',
  appId: '1:620058445357:web:828041dbd9b5d078a65aa4',
  measurementId: 'G-MTN0DXB8EK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
