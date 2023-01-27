// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTJd918CUFsi3VU6bEZW_djdkepX7KUYY",
  authDomain: "niki-and-thom-travel-6c212.firebaseapp.com",
  projectId: "niki-and-thom-travel-6c212",
  storageBucket: "niki-and-thom-travel-6c212.appspot.com",
  messagingSenderId: "59137918188",
  appId: "1:59137918188:web:bd46eef995f8727150d1c9",
  measurementId: "G-CGPP6JXZVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth()
const database = firebase.database()

function register() {
    firstName = document.getElementById('fName').value
    lastName = document.getElementById('lName').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if(validateEmail(email) == false || validatePassword(password) == false) {
        alert('Email or Password is incorrect')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then (function() {
        var user = auth.currentUser
        console.log('user created')
        alert('User Created')

        // Add user to fatabase
        var database_ref = database.ref()

        // create user Date
        var userData = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(userData)
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var errorCode = error.code
        var errorMessage = error.message 

        alert(errorMessage)
    })
}

// Validate input fields
function validateEmail(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validatePassword (password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validateFields(field) {
    if (field == null) {
        return false
    }
    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}





