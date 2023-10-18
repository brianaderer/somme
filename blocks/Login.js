import {View, Text} from '@gluestack-ui/themed';
import {StyledButton} from '../components/StyledButton';
import React from 'react';
import {StyledIcon} from '../components/StyledIcon';
import {StyledButtonText} from '../components/StyledButtonText';
import {onGoogleButtonPress} from '../SignIns/Google';
const Login = () => {
  return (
    <View
      alignItems={'center'}
      justifyContent={'center'}
      flex={1}
      bg={'$sommeMainBackground'}>
      <Text mb={'$8'}>Please Log In to Continue</Text>
      <StyledButton
        scheme={'outline'}
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log('Signed in with Google!'))
            .catch(error =>
              console.error('Error signing in with Google:', error),
            )
        }>
        <StyledButtonText>Google</StyledButtonText>
      </StyledButton>
    </View>
  );
};
export default Login;
