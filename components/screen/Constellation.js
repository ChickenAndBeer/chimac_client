import React from "react";
import { Button, View } from "react-native";
import { StackNavigator } from "react-navigation";

import Expo from "expo";

import * as THREE from "three"; // 0.87.1
import ExpoTHREE from "expo-three"; // 2.0.2

console.disableYellowBox = true;

export default class Constellation extends React.Component {
  constructor() {
    super();
    this.state = {
      sceneShapes: []
    }
  }

  render() {
    return (
      <Expo.GLView
        ref={(ref) => this._glView = ref}
        style={{ flex: 1 }}
        onContextCreate={this._onGLContextCreate}
      />
    );
  }

  _onGLContextCreate = async (gl) => {
    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    const arSession = await this._glView.startARSessionAsync();
    const scene = new THREE.Scene();
    const camera = ExpoTHREE.createARCamera(arSession, width, height, 0.01, 1000);
    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);

   // const colors= ['0x7ac7fe', '#fa8072' ]
    let renderedShape;

    for (let i = 0; i<7; i++) {
      const shape = new THREE.IcosahedronBufferGeometry(1.8, 0)
      const material = new THREE.MeshBasicMaterial({ color: 0x7ac7fe });
      renderedShape = new THREE.Mesh(shape, material);
      renderedShape.position.z = Math.round(Math.random()*100)*-0.1;
      renderedShape.position.y = Math.round(Math.random()*300)*0.1;
      renderedShape.position.x = Math.round(Math.random()*300)*0.1;
      this.state.sceneShapes.push(renderedShape)
    }

    for (let i= 0; i<this.state.sceneShapes.length; i++) {
      scene.add(this.state.sceneShapes[i]);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      //renderedShape.rotation.x += 0.001;
      //renderedShape.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    }
    animate();
  }

}
