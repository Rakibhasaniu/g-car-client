// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC0UX2ybcVUfW0rOhzF5rL2X2lSXpP8gpM",
  authDomain: "genius-car-f4405.firebaseapp.com",
  projectId: "genius-car-f4405",
  storageBucket: "genius-car-f4405.appspot.com",
  messagingSenderId: "282546154518",
  appId: "1:282546154518:web:03b032099d43296b025937"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

