import React, {useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import {View, Image} from 'react-native';
import {Center, HStack} from '@gluestack-ui/themed';
import {Button} from '../blocks/Button';
import {ButtonText} from '../blocks/ButtonText';

const CameraModule = props => {
  const {actions, state, closeModal} = props;
  const cameraRef = useRef(null);
  const [capturedImageUri, setCapturedImageUri] = useState(null);

  async function handleCapture() {
    if (cameraRef.current) {
      const {uri} = await cameraRef.current.capture();
      setCapturedImageUri(uri);
    }
  }
  const resetImage = () => {
    setCapturedImageUri('');
  };
  const saveImage = () => {
    actions.changeId({...state.id, label: capturedImageUri});
    closeModal();
  };

  return (
    <View>
      {/* Display the captured image if available */}
      {capturedImageUri ? (
        <>
          <Image
            source={{uri: capturedImageUri}}
            style={{width: 300, height: 300, marginTop: 20}}
          />
          <Center>
            <HStack>
              <Button
                size="sm"
                action="primary"
                borderWidth="$0"
                onPress={saveImage}
                title={'keep'}>
                <ButtonText>Keep</ButtonText>
              </Button>
              <Button
                size="sm"
                action="primary"
                borderWidth="$0"
                onPress={resetImage}
                title={'try again'}>
                <ButtonText>Try Again</ButtonText>
              </Button>
            </HStack>
          </Center>
        </>
      ) : (
        <>
          <Camera
            ref={cameraRef}
            cameraType={CameraType.Back}
            flashMode="auto"
            style={{width: 300, height: 300}}
          />
          <Button
            size="sm"
            action="primary"
            onPress={handleCapture}
            title={'tertiary'}
            scheme={'outline'}
            flush={'top'}>
            <ButtonText>Capture</ButtonText>
          </Button>
        </>
      )}
    </View>
  );
};

export default CameraModule;
