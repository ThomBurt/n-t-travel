const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBTJd918CUFsi3VU6bEZW_djdkepX7KUYY",
    authDomain: "niki-and-thom-travel-6c212.firebaseapp.com",
    projectId: "niki-and-thom-travel-6c212",
    storageBucket: "niki-and-thom-travel-6c212.appspot.com",
    messagingSenderId: "59137918188",
    appId: "1:59137918188:web:bd46eef995f8727150d1c9",
    measurementId: "G-CGPP6JXZVV"
  };

  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const User = db.collection("Users")
  


  module.exports = { User };