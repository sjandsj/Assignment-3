import React, { Component } from "react";
import { Alert } from "react-native";
import ImagePicker from "react-native-image-picker";
import { RegisterContainer } from "./Components/Container";
import { emailValidation } from "../../utils/validation";
import { passwordValidation } from "../../utils/validation";

var myNavigate;

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this123 = this;
    this.state = {
      displayPic: "",
      email: "",
      value: null,
      password1: "",
      password2: "",
      photoElement: ""
    };
  }
  uplaodImageButtonPressed() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHieght: 500,
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response  : ", response);

      if (response.didCancel) {
        Alert.alert("You Cancelled Image Selection");
      } else if (response.error) {
        Alert.alert("Error  :  ", response.error);
      } else if (response.customButton) {
        Alert.alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        this123.setState({
          displayPic: source
        });
        console.log("dddddddd", source);
      }
    });
  }

  createAccountButtonPressedAction = () => {
    if (
      this.state.email == "" &&
      this.state.password1 == "" &&
      this.state.password2 == ""
    ) {
      Alert.alert("Email And Password Cannot be Empty");
    } else if (this.state.password1 == "") {
      Alert.alert("Please Create A Password");
    } else if (this.state.password2 == "") {
      Alert.alert("Please Confim Your Password");
    } else if (this.state.email == "") {
      Alert.alert("Enter Your Email");
    } else if (this.state.password1!=this.state.password2) {
      Alert.alert("Password Did Not Match");
    } else {
      if (!emailValidation(this.state.email)) {
        Alert.alert("Invalid Email");
        return;
      } else if (passwordValidation(this.state.password1)) {
        Alert.alert("Invalid Password");
        return;
      }
      Alert.alert("Congrats Your Account Has been Created");
    }
  };

  backButton = () => {
    myNavigate("LoginScreen");
  };

  static navigationOptions = {
    title: "Register Screen"
  };

  render() {
    const { navigate } = this.props.navigation;
    myNavigate = navigate;
    return (
      <RegisterContainer
        backButtonPressed={this.backButton}
        imageSource={this.state.displayPic}
        uploadMyImagePressed={this.uplaodImageButtonPressed}
        emailValue={this.state.email}
        onChangeEmail={email => this.setState({ email })}
        password1Value={this.state.password1}
        onChangePassword1={password1 => this.setState({ password1 })}
        password2Value={this.state.password2}
        onChangePassword2={password2 => this.setState({ password2 })}
        radioPropsPressed={value => {
          this.setState({ value: value });
        }}
        createAccountButtonPressed={this.createAccountButtonPressedAction}
      />
    );
  }
}
