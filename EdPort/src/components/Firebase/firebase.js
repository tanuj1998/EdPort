import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBsYe3QbfgsP81On_VKmsQpd51z1OnTf28",
  authDomain: "edport-360cc.firebaseapp.com",
  databaseURL: "https://edport-360cc.firebaseio.com",
  projectId: "edport-360cc",
  storageBucket: "edport-360cc.appspot.com",
  messagingSenderId: "54401522665"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.firestore();

    }

      // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);


    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => {
      this.auth.signOut();
      alert("You Have Signed out.");
    }
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

  }

  export default Firebase;
