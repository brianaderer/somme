import React, {useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';
import {Center, HStack, View, Image, ButtonIcon} from '@gluestack-ui/themed';
import {StyledButton} from '../components/StyledButton';
import {StyledButtonText} from '../components/StyledButtonText';
import {StyledIcon} from '../components/StyledIcon';

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
            w={'$80'}
            h={'$80'}
            alt={''}
          />
          <Center>
            <HStack>
              <StyledButton
                w={'$40'}
                scheme={'outline'}
                flush={'topRight'}
                size="sm"
                onPress={saveImage}
                title={'keep'}>
                <StyledButtonText>Keep</StyledButtonText>
              </StyledButton>
              <StyledButton
                w={'$40'}
                flush={'topLeft'}
                scheme={'outline'}
                size="sm"
                onPress={resetImage}
                title={'try again'}>
                <StyledButtonText>Try Again</StyledButtonText>
              </StyledButton>
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
          <StyledButton
            size="sm"
            action="primary"
            onPress={handleCapture}
            title={'tertiary'}
            scheme={'outline'}
            flush={'top'}>
            <Center>
              <HStack>
                <StyledIcon size={30} name={'camera'} color={'$sommeTextActive'} />
                <StyledButtonText color={'$sommeTextChrome'} alignSelf={'center'}>
                  Capture
                </StyledButtonText>
              </HStack>
            </Center>
          </StyledButton>
        </>
      )}
    </View>
  );
};

export default CameraModule;
