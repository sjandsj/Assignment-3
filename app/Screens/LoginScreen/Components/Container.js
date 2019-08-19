import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const LoginContainer = props => {
  return (
    <View style={myStyle.mainContainer}>
      <View style={myStyle.greetingView}>
        <Image
          style={myStyle.image}
          source={{
            uri:
              "https://media.glassdoor.com/sqll/2453176/gammastack-squarelogo-1550152929919.png"
          }}
        />
        <View style={myStyle.textUnderGreetingView}>
          <Text style={myStyle.greetingStyle}>
            Welcome To GAMMASTACK Portal
          </Text>
          <Text style={myStyle.message}>Login To Continue</Text>
        </View>
      </View>
      <View style={myStyle.fieldView}>
        <TextInput
          style={myStyle.TextInputStyle}
          placeholder="Enter Your Email"
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={myStyle.TextInputStyle}
          placeholder="Enter Your Password"
          value={props.passwordValue}
          onChangeText={props.onChangePassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={props.loginButtonPressed}
          style={myStyle.touchableopacityForLogin}
        >
          <Text style={myStyle.loginButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.signUpButtonPressed}
          style={myStyle.touchableopacityForRegistration}
        >
          <Text style={myStyle.registerButton}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    alignSelf: "center",
    height: "45%",
    width: "25%"
  },
  greetingView: {
    flex: 1,
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  fieldView: {
    width: "100%",
    flex: 4,
    justifyContent: "flex-start",
    backgroundColor: "dodgerblue"
  },
  greetingStyle: {
    top: "30%",
    flex: 2,
    fontSize: 20,
    fontWeight: "900",
    alignSelf: "center",
    textAlign: "center"
  },
  message: {
    flex: 1,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    fontFamily: "Times New Roman"
  },
  textUnderGreetingView: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  TextInputStyle: {
    top: "12%",
    height: "12%",
    width: "100%",
    backgroundColor: "whitesmoke",
    textAlign: "center",
    fontSize: 20,
    borderWidth: 10,
    borderRadius: 30,
    borderColor: "dodgerblue",
    alignSelf: "center",
    padding: 10
  },
  touchableopacityForLogin: {
    top: "20%",
    backgroundColor: "whitesmoke",
    width: "40%",
    margin: 20,
    borderRadius: 35,
    alignSelf: 'flex-end',
  },
  loginButton: {
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: "900",
    textAlign: "center"
  },
  touchableopacityForRegistration: {
    top: "20%",
    backgroundColor: "whitesmoke",
    width: "40%",
    height: 35,
    borderRadius: 35,
    margin: 20,
    alignSelf: "flex-end"
  },
  registerButton: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Times New Roman",
    fontWeight: "900"
  }
});

export { LoginContainer };
