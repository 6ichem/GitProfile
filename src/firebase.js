import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkeKgsnkcUHUCe41_t-gJAku4lhKRSzYY",
  authDomain: "gitprofile-4b1b0.firebaseapp.com",
  projectId: "gitprofile-4b1b0",
  storageBucket: "gitprofile-4b1b0.appspot.com",
  messagingSenderId: "666389694579",
  appId: "1:666389694579:web:9cb17739860250f9188206",
  measurementId: "G-CVV4CT1T46",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); // initilaize
} else {
  firebase.app(); // if already initialized
}

export const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({
  allow_signup: "false",
});
export const signInWithGithub = () =>
  auth.signInWithPopup(provider).then((result) => {
    let username = result.additionalUserInfo.username;
    return username;
  });

export default firebase;
