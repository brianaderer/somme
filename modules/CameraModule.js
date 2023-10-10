import React, {useRef} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import {View} from 'react-native';
import {Button, ButtonText} from '@gluestack-ui/themed';

const CameraModule = props => {
  const cameraRef = useRef(null);

  async function handleCapture() {
    if (cameraRef.current) {
      const {uri} = await cameraRef.current.capture();
      console.log(uri);
    }
  }

  return (
    <View>
      <Camera
        ref={cameraRef}
        cameraType={CameraType.Back} // front/back(default)
        flashMode="auto"
        style={{width: 300, height: 300}}
      />
      <Button
        size="sm"
        action="primary"
        borderWidth="$0"
        onPress={handleCapture}
        sx={{
          bg: '$error700',
          ':hover': {
            bg: '$error800',
          },
          ':active': {
            bg: '$error900',
          },
        }}
        title={'tertiary'}>
        <ButtonText>Capture</ButtonText>
      </Button>
    </View>
  );
};

export default CameraModule;
