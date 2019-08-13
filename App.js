import React, { Component } from "react";
import Navigator from "./navigator/index";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/index";

export default class App_jsClass extends Component {
  render() {
    // return <Navigator />;
    return <RegisterScreen />;
  }
}
