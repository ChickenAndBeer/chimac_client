import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import EmptyBG from "./EmptyBG";
import BackgroundImg from './BackgroundImg';


export default class PlanetProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <BackgroundImg source={require("../assets/background.png")} />
        <Image style={styles.planet} source={require('../assets/ballon.png')} />

        <Text style={styles.text}>Your Choice: </Text>
        <Text style={styles.text1}>Planet of Nature</Text>

        <TouchableOpacity
        style={styles.button2}
          onPress={() => this.props.navigation.navigate("ChoosePhoto")}
        >
          <Text style={styles.buttonText}>See Other Planets</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("ChoosePhoto")}
        >
          <Text style={styles.buttonText}> Save Your Planet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  planet: {
    width: 200,
    height: 150,
    alignItems: "center",
    top: 100,
    position: "absolute",
    borderWidth: 1,
    borderColor: '#FFFFFF'

  },
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 450,
    position: "absolute"
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 500,
    position: "absolute"
  },
  buttonText: {
    color: "#3f348c",
    alignItems: "center",
    fontFamily: "Arial",
    fontSize: 20
  },

  text: {
    color: "#ffffff",
    alignItems: "center",
    fontFamily: "Arial",
    top: 280,
    position: "absolute",
    fontSize: 20,
    fontWeight: 'bold'
  },
  text1: {
    color: "#ffffff",
    alignItems: "center",
    fontFamily: "Arial",
    top: 310,
    position: "absolute",
    fontSize: 20,
    fontWeight: 'bold'
  }
});

