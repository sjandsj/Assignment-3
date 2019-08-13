import React, { Component } from "react";
import { Alert } from "react-native";
import ImagePicker from "react-native-image-picker";
import { RegisterContainer } from "./Components/Container"

var thisElement;

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    thisElement = this;
    this.state = {
      displayPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqA-PkujBrLPUF13w1FsaTe_OO6yDDRxVNW73b730r0ryLyXfG",
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
        thisElement.setState({
          displayPic: source
        });
      }
    });
  }

  render() {
    return (
      <RegisterContainer
        imageSource={{ uri: this.state.displayPic }}
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
      />
    );
  }
}
