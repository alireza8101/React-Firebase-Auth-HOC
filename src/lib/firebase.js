import firebase, {provider } from "firebase";

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "" ,
  messagingSenderId: ""
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else firebase.app();

export const auth = new firebase.auth();
export { firebase };
