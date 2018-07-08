import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYEIfdv31W5NbU8hK9019sZOIyvMeaa6c",
    authDomain: "forms-test-d5c46.firebaseapp.com",
    databaseURL: "https://forms-test-d5c46.firebaseio.com",
    projectId: "forms-test-d5c46",
    storageBucket: "forms-test-d5c46.appspot.com",
    messagingSenderId: "988071484745"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    firebaseDB,
    googleAuth
}

/*
firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
    .then((snapshot) => {
        console.log(snapshot.val())
    })
*/


