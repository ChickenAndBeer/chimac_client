import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Vibration } from "react-native";
import { Camera, Permissions, FileSystem } from "expo";

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    phtoId: 0
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  async componentDidMount() {
    try {
      await FileSystem.makeDirectoryAsync(
        `${FileSystem.documentDirectory}photos`,
        {
          intermediates: true, // creates intermediate directories
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  takePicture = async function() {
    console.log('TAKE PICKTURE', this.props)
    if (this.camera) {
      console.log('THIS CAMERA!')
      const picture = await this.camera.takePictureAsync();
      const pictureFile = await FileSystem.moveAsync(
        {
          from: picture.uri,
          to: `${
            FileSystem.documentDirectory
          }photos/Photo_${this.state.photoId}.jpg`
        }
      ).catch(err => console.error(err));
      Vibration.vibrate();
      console.log("Pic taken", this.state.photoId);
      return this.setState({
        photoId: this.state.photoId + 1
      });
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.flipButton,
                  styles.picButton,
                  { flex: 0.3, alignSelf: "flex-end" }
                ]}
                onPress={this.takePicture.bind(this)}
              >
                <Text style={styles.flipText}> SNAP </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  }
})
