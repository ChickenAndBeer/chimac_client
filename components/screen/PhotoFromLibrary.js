import React, { Component } from 'react';
import { CLARIFAI_KEY } from '../../secrets'
import Clarifai from 'clarifai'

import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import ImagePicker from 'react-native-image-picker'

export default class PhotoFromLibrary extends Component {
  constructor() {
    super();
    this.state = { image: null };
    this.handleClarifai = this.handleClarifai.bind(this)
  }

  // componentDidMount() {
  //   this.pickImage();
  // }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    // ImagePickerIOS.openSelectDialog({}, imageUri => {
    //   this.setState({ image: imageUri });
    // }, error => console.error(error));
    var options = {
      title: 'Select an Image',
      storageOptions: {
        skipBackup: true,
      },
      maxWidth: 480
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        // Do something with the selected image
      }
    });


  }

  handleClarifai() {
    const clarifai = new Clarifai.App({
      apiKey: "ec0c2c0336f54451a8bdbf17d4bc59aa"
    })

    this.setState({image: imageUri.replace('file://', '')});

    process.nextTick = setImmediate // RN polyfill

    const data = this.state.image;
    console.log(data)
    //const file = {base64: data}

    clarifai.models.predict(Clarifai.GENERAL_MODEL,  data)
      .then(res => {
        console.log(res.outputs[0].data)
      })
      .catch(Error)
  }

  render() {
    console.log('STATE', this.state)
    return (
      <View style={{ flex: 1 }}>

      <TouchableOpacity onPress={this.pickImage.bind(this)}>
        <Text>Select an image</Text>
      </TouchableOpacity>


        {this.state.image?
          <View style={{ flex: 1 }}>
          <Image style={{ flex: 1 }} source={{ uri: this.state.image }} />

          <TouchableOpacity
          style={styles.button}
          onPress={this.handleClarifai}
        >
          <Text style={styles.text}> Make Your Constellation </Text>
        </TouchableOpacity>
          </View>
           :
          null
        }


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    padding: 10,
    top: 380,
    left: 100,
    position: 'absolute'
  },
  text: {
    color: '#3f348c',
    fontFamily: 'Arial'
  }
})
