import {auth, getAuth, createUserWithEmailAndPassword }
from "./firebase.js"


const signup = async () =>{
    try{
        const email = "admin@example.com"
        const password = "abc123"
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
    }catch(error){
        console.log(error.message)
    }
}

window.signup = signup