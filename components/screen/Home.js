import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BackgroundImg from './BackgroundImg';

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <BackgroundImg source={require('../assets/home.png')} />

        <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('ChoosePhoto')}
      >
        <Text style={styles.text}> Make Your Constellation </Text>
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
    top: 380,
    position: 'absolute'
  },
  text: {
    color: '#3f348c',
    fontFamily: 'Arial'
  }
})
