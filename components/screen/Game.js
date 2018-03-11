import React, { Component } from "react";
import { Button, View, Text, ImagePickerIOS, Image } from "react-native";
import { StackNavigator } from "react-navigation";

export default class ChoosePhoto extends Component {
  constructor(){
    super()
    this.state = { image: null }

    this.pickCamera = this.pickCamera.bind(this)
    this.pickImage = this.pickImage.bind(this)
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        this.setState({ image: imageUri });
      },
      error => console.error(error)
    );
  }
  pickCamera() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openCameraDialog(
      {},
      imageUri => {
        this.setState({ image: imageUri });
      },
      error => console.error(error)
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          {this.state.image && (
            <Image style={{ flex: 1 }} source={{ uri: this.state.image }} />
          )}

        </View>

        {
          !this.state.image && (
            <View>
            <Button title="Camera to take photo" onPress={this.pickCamera} />
            <Button
              title="Making a constallation of your photo"
              onPress={this.pickImage}
            />
            </View>
          )
        }

      </View>
    );
  }
}
