import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC8P2QOYfrSDSHYQl0CG7iAnXWRTK4a_4",
  authDomain: "coffee-delivery-c35c8.firebaseapp.com",
  projectId: "coffee-delivery-c35c8",
  storageBucket: "coffee-delivery-c35c8.appspot.com",
  messagingSenderId: "1027505166378",
  appId: "1:1027505166378:web:caefc12172f3440e2acb53",
  measurementId: "G-B8K6QF51V0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
