// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjB60l32JhXP_yL2q-lfCQCPAVMgY9fk0",
  authDomain: "chef-recipe-hunter-server.firebaseapp.com",
  projectId: "chef-recipe-hunter-server",
  storageBucket: "chef-recipe-hunter-server.appspot.com",
  messagingSenderId: "236059722732",
  appId: "1:236059722732:web:4e4be91e4e0dbd826b36c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;