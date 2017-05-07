import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "../Login/Login";
import MainPage from "../MainPage/MainPage";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from "firebase";

export default class App extends Component {
  static loggedIn = false;
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Jake's React Project</h2>
          </div>
        </div>
        <div>
          <Router>
            <div>
              <Route exact path="/" component={MainPage}></Route>
              <Route path="/login" component={Login}></Route>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

var config = {
  apiKey: "AIzaSyC96vVF9PLyYX3Tr0Ilz7XuKBepQx982AY",
  authDomain: "jakestest-cd808.firebaseapp.com",
  databaseURL: "https://jakestest-cd808.firebaseio.com",
  projectId: "jakestest-cd808",
  storageBucket: "jakestest-cd808.appspot.com",
  messagingSenderId: "819066694875"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    App.loggedIn = true;
  } else {

  }
});