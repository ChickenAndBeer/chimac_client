import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ChoosePhoto extends React.Component {

  render() {
    return (
      <View>

        <Button
          title='Camera to take photo'
          onPress={() => this.props.navigation.navigate('TakePhoto')}
        />

        <Button
          title='Making a constallation of your photo'
          onPress={() => this.props.navigation.navigate('PhotoFromLibrary')}
        />

      </View>
    )
  }
}

