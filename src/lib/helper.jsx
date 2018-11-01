import React from "react";
export const setProvider = (firebase, providerName) => {
  let provider = null;
  switch (providerName) {
    case "google":
      provider = new firebase.auth.GoogleAuthProvider();
      break;
    default:
      provider = null;
  }
  return provider;
  console.log("providerName");
};
export const signInWithOAuth = (firebase, providerName, user, error) => {
  this.authProvider = setProvider(firebase, providerName);
  this.auth = new firebase.auth();

  this.auth
    .signInWithPopup(this.authProvider)
    .then(result => {
      this.user = () => {
        return result;
      };
    })
    .catch(error => {
      this.error = () => {
        return error;
      };
    });
};
