let firebase = require('firebase');
let admin = require('firebase-admin');

let serviceAccount = require('./fireNation.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://test-9a981.firebaseio.com"
});


var config = {
    apiKey: "AIzaSyBUFjqvmh4VbYqmMv0qZrtmbRFNl2UBfdY",
    authDomain: "test-9a981.firebaseapp.com",
    databaseURL: "https://test-9a981.firebaseio.com",
    projectId: "test-9a981",
    storageBucket: "test-9a981.appspot.com",
    messagingSenderId: "874051787548"
  };
firebase.initializeApp(config);

let db = admin.app().database();

module.exports = db