import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc,doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCK8mJCjxmNZdXsJlaT8ORWJXpVaOcMi-A",
    authDomain: "saquib-proj1.firebaseapp.com",
    projectId: "saquib-proj1",
    storageBucket: "saquib-proj1.firebasestorage.app",
    messagingSenderId: "221431608106",
    appId: "1:221431608106:web:987a3807e6f4bee69f2453"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth();

 export{auth, getAuth, createUserWithEmailAndPassword };