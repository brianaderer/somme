import React from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';

const CameraModule: () => Node = props => {
  return (
    <Camera
      ref={ref => (this.camera = ref)}
      cameraType={CameraType.Back} // front/back(default)
      flashMode="auto"
    />
  );
};

export default CameraModule;
