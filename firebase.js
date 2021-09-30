import firebase from 'firebase';

// get your firebaseConfig from firebase
import firebaseConfig from './firebaseAPI';




//if firebase app is already initialized, use it or initialize one
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
