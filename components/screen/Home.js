import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BackgroundImg from './BackgroundImg';

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <BackgroundImg source={require('../assets/home.png')} />
        <Text style={styles.tagLine}> Use the colors of your photos to make AR planets </Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('ChoosePhoto')}
      >
        <Text style={styles.text}> Make Planets </Text>
      </TouchableOpacity>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    padding: 10,
    top: 400,
    position: 'absolute'
  },
  tagLine: {
    alignItems: 'center',
    color: '#FFFFFF',
    opacity: 0.9,
    padding: 10,
    top: 350,
    position: 'absolute'
  },

  text: {
    color: '#3f348c',
    fontFamily: 'Arial'
  }
})
