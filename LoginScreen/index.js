import React, { Component } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={myStyle.mainContainer}>
        <Image
          style={myStyle.image}
          source={{
            uri:
              "https://media.glassdoor.com/sqll/2453176/gammastack-squarelogo-1550152929919.png"
          }}
        />
        <Text>Welcome To GAMMASTACK Portal</Text>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  image: {
    height: 50,
    width: 50
  }
});
