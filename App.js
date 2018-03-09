import React from 'react';
import { RootStack } from './components/router'
import store from './components/redux'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}


