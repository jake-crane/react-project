import React from "react";
import './Login.css';

export default class Login extends React.Component {
    login() {
        alert('Username:'
            + this.state.username
            + '\n'
            + 'Password:'
            + this.state.password);
    }
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    render() {
        return (
            <div className="outerFormContainer">
                <div className="formContainer">
                    <form>
                        <div className="loginTitle">Login</div>
                        <div>
                            <input id="username" placeholder="Username" onChange={this.handleUsernameChange.bind(this)} required />
                        </div>
                        <div>
                            <input id="password" placeholder="Password" type="password" onChange={this.handlePasswordChange.bind(this)} required />
                        </div>
                        <div>
                            <button onClick={this.login.bind(this)}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}