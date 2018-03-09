import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from './style';

export default class EndWin extends React.Component {
  render(){
    return(
      <View style={styles.body}>
        <Text>You Won!</Text>
        <Text>scores: 100</Text>

        <Button
          title="Next Level"
          onPress={() => this.props.navigation.navigate('Game')}
        />

        <Button
          title="Play Again"
          onPress={() => this.props.navigation.navigate('Game')}
        />
      </View>
    )

  }
}
