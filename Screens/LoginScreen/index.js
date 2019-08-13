import React, { Component } from "react";
import { LoginContainer } from "./Components/Container"

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <LoginContainer
        emailValue={this.state.email}
        passwordValue={this.state.password}
        onChangeEmail={email => this.setState({ email })}
        onChangePassword={password => this.setState({ password })}
      />
    );
  }
}
