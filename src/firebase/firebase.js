import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseAuthDomain,
  firebaseMessagingSenderId,
  firebaseProjectId,
  firebaseStorageBucket,
  firebaseDatabaseUrl,
} from "../shared/consts";

const app = firebase.initializeApp({
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  databaseURL: firebaseDatabaseUrl,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
});

export const auth = app.auth();
export default app;
