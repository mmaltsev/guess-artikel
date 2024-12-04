import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'

let isAuthInitialized = false;

export const waitForAuth = () => {
  return new Promise((resolve) => {
    if (isAuthInitialized) {
      resolve(auth.currentUser);
    } else {
      onAuthStateChanged(auth, (user) => {
        isAuthInitialized = true;
        resolve(user);
      });
    }
  });
};