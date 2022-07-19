import auth from "../firebase/firebase";

export const firebaseSignUp = (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const firebaseLogin = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const firebaseLogout = () => {
  return auth.signOut();
};

export const firebaseResetPassword = (email: string) => {
  return auth.sendPasswordResetEmail(email);
};
