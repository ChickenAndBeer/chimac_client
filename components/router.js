import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// All Components
import Home from './screen/Home'
import SignUp from './screen/SignUp'
import Start from './screen/Start'
import Game from './screen/Game'
import EndWin from './screen/EndWin'
import EndFail from './screen/EndFail'
import Ready from './screen/Ready'

export const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  SignUp: {
    screen: SignUp //filename
  },
  Start: {
    screen: Start
  },
  Ready: {
    screen: Ready
  },
  Game: {
    screen: Game
  },
  EndWin: {
    screen: EndWin
  },
  EndFail: {
    screen: EndFail
  }
})

