import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {

  render() {
    return (
      <View>

        <Text>Your photo here</Text>

        <Button
          title='try again'
          onPress={() => this.props.navigation.navigate('Home')}
        />

      </View>
    )
  }
}
