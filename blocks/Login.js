import {View, Text} from '@gluestack-ui/themed';
import {StyledButton} from '../components/StyledButton';
import React from 'react';
import {StyledIcon} from '../components/StyledIcon';
import {StyledButtonText} from '../components/StyledButtonText';
//import {GOOGLE_mobilesdk_app_id} from '@env';
// import GoogleSignin from '../SignIns/Google';
const Login = () => {
  //console.log(GOOGLE_mobilesdk_app_id);
  return (
    <View
      alignItems={'center'}
      justifyContent={'center'}
      flex={1}
      bg={'$sommeMainBackground'}>
      <Text mb={'$8'}>Please Log In to Continue</Text>
      <StyledButton scheme={'outline'}>
        <StyledButtonText>Google</StyledButtonText>
      </StyledButton>
    </View>
  );
};
export default Login;
