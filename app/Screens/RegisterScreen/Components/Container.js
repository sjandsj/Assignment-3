import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import RadioForm from "react-native-simple-radio-button";

var radio_props = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
  { label: "Other", value: 2 }
];

const RegisterContainer = props => {
  return (
    <View style={myStyle.mainContainer}>
      <ImageBackground
        style={myStyle.imageBackground}
        source={{
          uri:
            "https://3.bp.blogspot.com/-CbmFDA3VLiI/XCDoxYhVojI/AAAAAAAAJSg/3UL-LiuBal4ls8LYrzriUw_KKKfhM929wCLcBGAs/s1600/background%2Bhd%2Bimages%2B%252810%2529.jpg"
        }}
      >
        <Text style={myStyle.headerStyle}>Enter Your Details</Text>
        <View style={myStyle.uplaodImageView}>
          <Image style={myStyle.imageDimensions} source={props.imageSource} />
          <TouchableOpacity
            onPress={props.uploadMyImagePressed}
            style={myStyle.uplaodImageButton}
          >
            <Text style={myStyle.uplaodImageButtonText}>Upload An Image</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={myStyle.textInput}
          placeholder="Enter Your Email"
          keyboardType="email-address"
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
        />
        <RadioForm
          radio_props={radio_props}
          formHorizontal={true}
          labelHorizontal={true}
          animation={true}
          onPress={props.radioPropsPressed}
        />
        <TextInput
          style={myStyle.textInput}
          placeholder="Choose A Password"
          value={props.password1Value}
          secureTextEntry={true}
          onChangeText={props.onChangePassword1}
        />
        <TextInput
          style={myStyle.textInput}
          placeholder="Confirm Password"
          value={props.password2Value}
          secureTextEntry={true}
          onChangeText={props.onChangePassword2}
        />
        <TouchableOpacity
          onPress={props.createAccountButtonPressed}
          style={myStyle.touchableOpacity}
        >
          <Text style={myStyle.registerButton}>Create an Account</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

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
    fontStyle: "italic"
  },
  textInput: {
    width: "90%",
    borderRadius: 95,
    backgroundColor: "whitesmoke",
    textAlign: "center",
    height: "6%",
    fontWeight: "900",
    fontSize: 25,
    fontFamily: "Times New Roman"
  },
  touchableOpacity: {
    height: "6%",
    width: "50%",
    borderRadius: 35,
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center"
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

export { RegisterContainer };
