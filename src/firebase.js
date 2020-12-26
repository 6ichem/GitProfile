import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
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
