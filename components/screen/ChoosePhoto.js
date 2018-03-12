import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import EmptyBG from "./EmptyBG";

export default class ChoosePhoto extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EmptyBG source={require("../assets/background.png")} />

        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("TakePhoto")}
        >
          <Text style={styles.text}>   Take a photo   </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate("PhotoFromLibrary")}
        >
          <Text style={styles.text}> Choose a photo </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 300,
    position: "absolute"
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 400,
    position: "absolute"
  },

  text: {
    color: "#3f348c",
    fontFamily: "Arial",
    fontSize: 20
  }
});
