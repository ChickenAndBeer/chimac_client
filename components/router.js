import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// All Components
// import Signup from '';
// import Login from '';
import Home from './screen/Home'
import SignUp from './screen/SignUp'

export const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  SignUp: {
    screen: SignUp //filename
  }
})

