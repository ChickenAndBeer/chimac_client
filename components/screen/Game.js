import React from 'react';
import { Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Game extends React.Component {
  render(){
    return(
      <View>
      <Button
        title="Winner"
        onPress={()=> this.props.navigation.navigate('EndWin')}
      />
      <Button
        title="Loser"
        onPress={()=> this.props.navigation.navigate('EndFail')}
      />

      </View>
    )
  }
}
