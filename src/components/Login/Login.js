import React from "react";
import './Login.css';
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
import App from "../App/App";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = { loggedIn: false };
        var self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.setState({ loggedIn: true });
            } else {

            }
        });
    }
    login() {
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .catch(function (error) {
                console.error(error);
            });
    }
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    handleKeypress(e) {
        if (e.charCode === 13)
            this.login();
    }
    render() {
        if (App.loggedIn || this.state.loggedIn) {
            return (<Redirect to={{
                pathname: '/',
                state: { from: this.props.location }
            }} />);
        } else {
            return (
                <div className="outerFormContainer">
                    <div className="formContainer">
                        <div>
                            <div className="loginTitle">Login</div>
                            <div>
                                <input id="username" placeholder="Username" onChange={this.handleUsernameChange.bind(this)} onKeyPress={this.handleKeypress.bind(this)} required />
                            </div>
                            <div>
                                <input id="password" placeholder="Password" type="password" onChange={this.handlePasswordChange.bind(this)} onKeyPress={this.handleKeypress.bind(this)} required />
                            </div>
                            <div>
                                <button onClick={this.login.bind(this)}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}