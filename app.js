import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "./firebase.js";

const signup = async () => {
  try {
    const email = document.getElementById('emailInput1').value;
    const password = document.getElementById('passwordInput1').value;

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup Success: " + userCredential.user);
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

const login = async () => {
  try {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", user.user.email);
    alert("Account Successfully Logged In");
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

window.signup = signup;
window.login = login;
