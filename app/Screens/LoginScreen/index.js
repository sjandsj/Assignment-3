import React, { Component } from "react";
import { LoginContainer } from "./Components/Container";
import { emailValidation } from "../../utils/validation";
import { passwordValidation } from "../../utils/validation";
import { Alert } from "react-native";

var myNavigate;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signUpButtonPressedAction = () => {
    myNavigate("RegisterScreen");
  };

  loginButtonPressedAction = () => {
    if (this.state.email == "" && this.state.password == "") {
      Alert.alert("Please Enter Your Details");
    } else if (this.state.email == "") {
      Alert.alert("Please Enter An Email");
    } else if (this.state.password == "") {
      Alert.alert("Please Enter a Password");
    } else {
      if (!emailValidation(this.state.email)) {
        Alert.alert("Invalid Email");
        return;
      } else if (passwordValidation(this.state.password)) {
        Alert.alert("Invalid Password");
        return;
      }
      Alert.alert("Congrats You Succesfully Logged In");
    }
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
        signUpButtonPressed={this.signUpButtonPressedAction}
        loginButtonPressed={this.loginButtonPressedAction}
      />
    );
  }
}
