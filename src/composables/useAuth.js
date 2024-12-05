import { ref } from 'vue';
import { auth, googleProvider} from '../../firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from 'firebase/auth';

const user = ref(null);

// Watch for authentication state changes
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

// Email/Password Registration
const register = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await sendEmailVerification(user);
};

// Email/Password Sign In function
const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// Google Sign In
const loginWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};

// Sign Out function
const logout = async () => {
  await signOut(auth);
};

const passwordReset = async (email) => {
  await sendPasswordResetEmail(auth, email);
}

export function useAuth() {
  return { user, login, register, loginWithGoogle, logout, passwordReset };
}
