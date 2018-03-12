import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// All Components
import Home from './Home'
import PhotoFromLibrary from './PhotoFromLibrary'
import TakePhoto from './TakePhoto'
import ChoosePhoto from './ChoosePhoto'
import PlanetProfile from './PlanetProfile'

export const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  PhotoFromLibrary: {
    screen: PhotoFromLibrary
  },
  TakePhoto: {
    screen: TakePhoto
  },
  ChoosePhoto: {
    screen: ChoosePhoto
  },
  PlanetProfile: {
    screen: PlanetProfile
  }
})
