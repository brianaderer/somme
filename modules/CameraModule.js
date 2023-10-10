import React, {useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import {View, Image} from 'react-native';
import {Button, ButtonText, Center, Text, HStack} from '@gluestack-ui/themed';

const CameraModule = props => {
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
            <Text>Does this look good to you?</Text>
            <HStack>
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
                title={'keep'}>
                <ButtonText>Keep</ButtonText>
              </Button>
              <Button
                size="sm"
                action="primary"
                borderWidth="$0"
                onPress={resetImage}
                sx={{
                  bg: '$error700',
                  ':hover': {
                    bg: '$error800',
                  },
                  ':active': {
                    bg: '$error900',
                  },
                }}
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
        </>
      )}
    </View>
  );
};

export default CameraModule;
