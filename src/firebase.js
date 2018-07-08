import * as firebase from 'firebase';

/*todo should be config fom firebase*/
const config = {

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


