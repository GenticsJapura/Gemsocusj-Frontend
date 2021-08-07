import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDTJD1OgvuAGZ6-N2PZzAnq3Xb0PHSUN4c",
    authDomain: "gemsoc-usj.firebaseapp.com",
    projectId: "gemsoc-usj",
    storageBucket: "gemsoc-usj.appspot.com",
    messagingSenderId: "556490103953",
    appId: "1:556490103953:web:6644ec519ccc5d790bf330"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
