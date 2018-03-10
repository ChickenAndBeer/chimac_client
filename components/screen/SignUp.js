// path '/signup'
import React, { Component } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import { StackNavigator } from "react-navigation";
import { styles } from './style'
//import { createUser } from '../redux'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastNmae: '',
      email: '',
      password: ''
    };
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log(this.state)
  }
  render() {
    return (
      <View style={styles.body}>
      <Text style = {styles.text}>SIGN UP</Text>
      <Text style = {styles.text}>First Name</Text>
      <TextInput
        placeholder = "enter your first name"
        editable = {true}
        onChangeText={(firstName) => this.setState({firstName})}
        value={this.state.firstName}
        maxLength = {40}
      />

      <Text style = {styles.text}>Last Name</Text>
      <TextInput
        placeholder = "enter your last name"
        editable = {true}
        onChangeText={(lastNmae) => this.setState({lastNmae})}
        value={this.state.lastNmae}
        maxLength = {40}
      />

      <Text style = {styles.text}>Email</Text>
      <TextInput
        placeholder = "enter your email"
        editable = {true}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        maxLength = {40}
      />

      <Text style = {styles.text}>Password</Text>
      <TextInput
        placeholder = "enter your password"
        editable = {true}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        maxLength = {40}
        secureTextEntry = {true}
      />

      <Button
      title = 'Submit'
      onPress = {() => this.props.navigation.navigate('Ready')}
      onSubmitEditing = {this.handleSubmit}
      />
      </View>
    );
  }
}

// export const mapDispatchToProps = (dispatch) => {
//  return {
//   createNewUser: function(user) {
//     dispatch(createUser(user))
//   }
//  }
// }
