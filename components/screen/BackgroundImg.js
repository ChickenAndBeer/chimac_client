import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const BackgroundImg = (props) => {

  return (
    <View style={styles.container}>
    <Image source={props.source} style={styles.bg} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  bg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingBottom: 50,
  },
})

export default BackgroundImg;
