import React, {Component} from 'react';
import  {Button, View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text> Home Screen </Text>
        <Button
        title = 'Sign Up'
        onPress = {() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}
