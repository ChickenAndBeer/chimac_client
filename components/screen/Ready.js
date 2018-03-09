import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from './style'

export default class Ready extends React.Component {
  render(){
    return(
      <View style={styles.body}>
        <Text>Are You Ready?</Text>
        <Button
          title="Start!"
          onPress={()=> this.props.navigation.navigate('Game')}
        />

      </View>
    )
  }
}
