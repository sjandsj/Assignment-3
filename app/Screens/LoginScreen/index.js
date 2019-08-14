import React, { Component } from "react";
import { LoginContainer } from "./Components/Container";

var myNavigate;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  LoginButtonPressed = () => {
    myNavigate("RegisterScreen");
  };

  render() {
    const { navigate } = this.props.navigation;
    myNavigate = navigate;

    return (
      <LoginContainer
        emailValue={this.state.email}
        passwordValue={this.state.password}
        onChangeEmail={email => this.setState({ email })}
        onChangePassword={password => this.setState({ password })}
        OnLoginButtonPressed={this.LoginButtonPressed}
      />
    );
  }
}
