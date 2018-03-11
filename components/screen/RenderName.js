import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigator } from 'react-navigation';


export default class RenderName extends React.Component {
  render() {
    const wordsArr = this.props.info.words.concepts
    //let colorLength = this.props.info.colors.length
   // console.log(colorLength)



    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your Planet Names Are: </Text>

        {wordsArr.slice(1, 6).map((obj, i) => {
          return (
          <Text key ={i} style={styles.text}>Planet of {obj.name}</Text> )
        })}

        <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('ChoosePhoto')}
      >
        <Text style={styles.text}> Choose Another Photo </Text>
      </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    padding: 10,
    top: 380,
    position: "absolute"
  },
  text: {
    color: "#3f348c",
    fontFamily: "Arial"
  }
});
