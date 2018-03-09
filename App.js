import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/screen/Login'
import Home from './components/screen/Home'
import {RootStack} from './components/router'


export default class App extends React.Component {
  render() {
    return (
        <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
