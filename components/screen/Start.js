import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from './style'

export default class Start extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Welcome back,</Text>
        <Text style={styles.text}>Chimackers!</Text>

        <Button
          title='Level 1'
          onPress={() => this.props.navigation.navigate('Ready')}
        />

        <Button
          title='Level 2'
          onPress={() => this.props.navigation.navigate('Ready')}
        />

        <Button
          title='Level 3'
          onPress={() => this.props.navigation.navigate('Ready')}
        />

      </View>
    )
  }
}
