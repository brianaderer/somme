import React from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';

const CameraModule = props => {
  return (
    <Camera
      ref={ref => (this.camera = ref)}
      cameraType={CameraType.Back} // front/back(default)
      flashMode="auto"
      style={{width: 300, height: 300}}
    />
  );
};

export default CameraModule;
