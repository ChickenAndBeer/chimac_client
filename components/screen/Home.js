import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {

  render() {
    return (
      <View>

        <Text>CONSTALAY</Text>

        <Button
          title='Make your constellation'
          onPress={() => this.props.navigation.navigate('Game')}
        />

      </View>
    )
  }
}
