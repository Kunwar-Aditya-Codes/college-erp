import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_ag5vapxgolP96dJT5ThTeHB7Y4U3rug",
  authDomain: "college-erp-ce837.firebaseapp.com",
  projectId: "college-erp-ce837",
  storageBucket: "college-erp-ce837.appspot.com",
  messagingSenderId: "696295023409",
  appId: "1:696295023409:web:3d782fa76c4e39fdba4610",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
