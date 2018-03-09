import React, { Component } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from './style'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.body}>

        <Text style={styles.text}> Welcome To ChiMac! </Text>

        <Text>email</Text>
        <TextInput
          placeholder="your email" style={styles.input}
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <Text>password</Text>

        <TextInput
          placeholder="your password" style={styles.input}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.email}
        />
        <Button
          title='Log In'
          onPress={() => this.props.navigation.navigate('Start')}
        />

        <Button
          title='Sign Up'
          onPress={() => this.props.navigation.navigate('SignUp')}
        />

        <Button
          title='Sign Up with Google'
          onPress={() => this.props.navigation.navigate('SignUp')}
        />

      </View>
    )
  }
}
