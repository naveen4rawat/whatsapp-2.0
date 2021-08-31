import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAS5PuV434Qb5IqgMHnte1UKha-31PjB-Y",
  authDomain: "whatsapp-2-b5a79.firebaseapp.com",
  projectId: "whatsapp-2-b5a79",
  storageBucket: "whatsapp-2-b5a79.appspot.com",
  messagingSenderId: "960710517268",
  appId: "1:960710517268:web:42e2b65fd273553966fd01",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
