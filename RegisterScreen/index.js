import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Alert,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

var thisElement;
var radio_props = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Other", value: 2 }
];

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
      <View style={myStyle.mainContainer}>
        <ImageBackground
          style={myStyle.imageBackground}
          source={require("./123.png")}
        >
          <Text style={myStyle.headerStyle}>Enter Your Details</Text>
          <View style={myStyle.uplaodImageView}>
            <Image
              style={myStyle.imageDimensions}
              source={{ uri: this.state.displayPic }}
            />
            <TouchableOpacity
              onPress={this.uplaodImageButtonPressed}
              style={myStyle.uplaodImageButton}
            >
              <Text style={myStyle.uplaodImageButtonText}>Upload An Image</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={myStyle.textInput}
            placeholder="Enter Your Email"
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <RadioForm
            radio_props={radio_props}
            formHorizontal={true}
            labelHorizontal={true}
            animation={true}
            onPress={value => {
              this.setState({ value: value });
            }}
          />
          <TextInput
            style={myStyle.textInput}
            placeholder="Choose A Password"
            value={this.state.password1}
            secureTextEntry={true}
            onChangeText={password1 => this.setState({ password1 })}
          />
          <TextInput
            style={myStyle.textInput}
            placeholder="Confirm Password"
            value={this.state.password2}
            secureTextEntry={true}
            onChangeText={password2 => this.setState({ password2 })}
          />
          <TouchableOpacity style={myStyle.touchableOpacity}>
            <Text style={myStyle.registerButton}>Create an Account</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: "900",
    fontStyle: "italic",
  },
  textInput: {
    width: "90%",
    borderRadius: 95,
    backgroundColor: "whitesmoke",
    textAlign: "center",
    height: "6%",
    fontWeight: "900",
    fontSize: 25,
    fontFamily: "Times New Roman",
  },
  touchableOpacity: {
    height: "6%",
    width: "50%",
    borderRadius: 35,
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    fontSize: 17,
    fontWeight: "400"
  },
  uplaodImageView: {
    justifyContent: "center",
    alignItems: "center"
  },
  uplaodImageButton: {
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "50%"
  },
  uplaodImageButtonText: {
    fontSize: 25,
    fontFamily: "Times New Roman"
  },
  imageDimensions: {
    width: 100,
    height: 100,
    backgroundColor: "steelblue"
  }
});
