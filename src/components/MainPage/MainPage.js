import React from "react";
import { Redirect } from 'react-router-dom'
import firebase from "firebase";
import App from "../App/App";

export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = { loggedIn: false };
        var self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.setState({ loggedIn: true });
            } else {
                self.setState({
                    loggedIn: false,
                    checkedLogin: true
                });
            }
        });
    }
    logout() {
        firebase.auth().signOut().then(function () {
            self.setState({
                loggedIn: false
            });
            alert('Sign Out Successful');
        }).catch(function (error) {
            // An error happened.
        });
    }
    render() {
        const checkingLoginStatus = (
            <div>
                <span>Checking Login Status...</span>
            </div>
        );
        const mainPage = (
            <div>
                <a href="" onClick={this.logout.bind(this)}>Sign Out</a>
                <h2>Main Page</h2>
            </div>
        );

        const redirect = (<Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
        }
        } />);
        if (App.loggedIn || this.state.loggedIn) {
            return mainPage
        } else if (this.state.checkedLogin) {
            return redirect;
        } else {
            return checkingLoginStatus;
        }
    }
}