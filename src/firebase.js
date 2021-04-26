import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGBNm6HwEvJNcfL9zFXzh9wiVYw5lFcXE",
  authDomain: "facebook-look-a-like.firebaseapp.com",
  projectId: "facebook-look-a-like",
  storageBucket: "facebook-look-a-like.appspot.com",
  messagingSenderId: "97135513422",
  appId: "1:97135513422:web:8e3ccee2e5b0c1ad8d981f",
  measurementId: "G-CSKWYSSPKW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
