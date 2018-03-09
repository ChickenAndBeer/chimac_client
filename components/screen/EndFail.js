import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from './style';

export default class EndFail extends React.Component {
  render(){
    return(
      <View style={styles.body}>
        <Text>You Lost!</Text>
        <Text>scores: 10</Text>

        <Button
          title="Play Again"
          onPress={() => this.props.navigation.navigate('Game')}
        />
      </View>
    )

  }}
