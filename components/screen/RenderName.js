import React, { Component } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigator } from 'react-navigation';


export default class RenderName extends React.Component {
  constructor(){
    super()
    this._onPress = this._onPress.bind(this)
  }

  _onPress(){
    this.props.profile.navigate('PlanetProfile')
  }

  render() {
    const wordsArr = this.props.info.words.concepts
    //let colorLength = this.props.info.colors.length
   // console.log(colorLength)



    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your Planet Names Are: </Text>

        {wordsArr.slice(1, 6).map((obj, i) => {
          return (
            <Button key={obj.name}
            sytle={styles.text}
            onPress={this._onPress}
            title={`Planet of ${obj.name}`}
          />)
        })}



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
    fontFamily: "Arial",
  }
});
