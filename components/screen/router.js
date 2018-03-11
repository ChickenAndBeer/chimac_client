import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// All Components
import Home from './Home'
import Game from './Game'

export const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  Game: {
    screen: Game
  }
})
