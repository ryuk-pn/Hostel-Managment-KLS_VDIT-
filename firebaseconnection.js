import { getFirestore } from "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, addDoc,collection,doc,setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcM-0jBvqFD0Wfdt2GNzTIKLiFD9dMBgk",
  authDomain: "hostel-7775c.firebaseapp.com",
  projectId: "hostel-7775c",
  storageBucket: "hostel-7775c.appspot.com",
  messagingSenderId: "607056018245",
  appId: "1:607056018245:web:52e26d298d32e16d461c2c",
  measurementId: "G-WZJRB26LW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signup = document.getElementById("submit");
signup.addEventListener('click', (event)=>{
  event.preventDefault();
  const email = document.getElementById("Semail").value;
  const pass = document.getElementById("Spassword").value;
  const uname = document.getElementById("uname").value;
  const usn = document.getElementById("usn").value;
  const fees = document.getElementById("fees").value;
  const addr = document.getElementById("address").value;

  const auth = getAuth();
  const db = getFirestore();
  
  createUserWithEmailAndPassword(auth,email,pass)
  .then((userCredential)=>{
    const user = userCredential.user;
    const userData ={
      username: uname,
      usn: usn,
      fees: fees,
      address: addr
      };
      const value= doc(db,"users", 'boys');
      const collectionval = collection(value,"details");
      addDoc(collectionval,userData)
      .then(()=>{
        alert("User created successfully");
        window.location.href='/student-reg.html'
      })
      .catch((error)=>{
       // alert("Error creating user");""
        console.error("error creating user", error);
      })


    }
)
.catch((error)=>{
  const errorCode = error.code;
  if (errorCode=='auth/email-already-in-use') {
    alert("email already exist");
  }
  else{
    alert("unable to create user");
    }
    })
    })
