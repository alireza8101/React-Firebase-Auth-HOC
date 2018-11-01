import React from "react";
import { firebase } from "./firebase";
import * as helper from "./helper";

export const withFirebaseAuth = BaseComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.auth = new firebase.auth();
      firebase.auth().useDeviceLanguage();
    }
    createUserWithEmailAndPassword = (email, password) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
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
    signInWithEmail = (email, password) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
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
    signInWithGoogle = () => {
      helper.signInWithOAuth(firebase, "google", this.user, this.error);
    };
    signOut = () => {
      this.auth.signOut();
    };

    render() {
      return (
        <BaseComponent
          {...this.props}
          createUserWithEmailAndPassword={this.createUserWithEmailAndPassword}
          signInWithEmail={this.signInWithEmail}
          signInWithGoogle={this.signInWithGoogle}
          signOut={this.signOut}
          user={this.user}
          error={this.error}
        />
      );
    }
  }
  return HOC;
};
