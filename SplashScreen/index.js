import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={myStyles.mainContainer}>
        <Image
          style={myStyles.imageStyle}
          source={{
            uri:
              "https://media.glassdoor.com/sqll/2453176/gammastack-squarelogo-1550152929919.png"
          }}
        />
        <Text style={myStyles.headerText}>GAMMASTACK</Text>
        <View style={myStyles.subView}>
          <Text style={myStyles.tagline}>Taking</Text>
          <Text style={myStyles.itStyle}>IT</Text>
          <Text style={myStyles.tagline}>Forward</Text>
        </View>
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 35,
    fontWeight: "900",
    color: "black",
    fontStyle: "italic"
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  subView: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  tagline: {
    fontSize: 15,
    fontWeight: "900"
  },
  itStyle: {
    color: "steelblue",
    fontSize: 15,
    fontWeight: "900"
  }
});
