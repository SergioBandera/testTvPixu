import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl2_HRG9ffDtcSneWfLJRLCyyDoBR_AU8",
  authDomain: "tvpixu-e75cc.firebaseapp.com",
  projectId: "tvpixu-e75cc",
  storageBucket: "tvpixu-e75cc.appspot.com",
  messagingSenderId: "204706895170",
  appId: "1:204706895170:web:27d981de09059fbefb64db",

  //   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  //   appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
