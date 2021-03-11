import  firebase from "firebase/app";
import "firebase/firestore";
import  "firebase/auth"

    const firebaseConfig = {
        apiKey: "AIzaSyCPZIupmyOH941-9fqCRajnhBg0MFJuUM4",
        authDomain: "exam-d27e5.firebaseapp.com",
        databaseURL: "https://exam-d27e5.firebaseio.com",
        projectId: "exam-d27e5",
        storageBucket: "exam-d27e5.appspot.com",
        messagingSenderId: "966077259046",
        appId: "1:966077259046:web:b02d7f512d766c997d35e7",
        measurementId: "G-L1EPR0DZNT"
      };
firebase.initializeApp(firebaseConfig)


export default firebase;