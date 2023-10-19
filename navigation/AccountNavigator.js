import {StyledButton} from '../components/StyledButton';
import {signOut} from '../SignIns/Google';
import {StyledButtonText} from '../components/StyledButtonText';
import {View} from '@gluestack-ui/themed';
import React from 'react';

const AccountNavigator = ({children, user}) => {
  return (
    <View flex={1} bg={'$sommeMainBackground'}>
      {user ? (
        <StyledButton
          position={'fixed'}
          top={'$0'}
          right={'$0'}
          scheme={'outline'}
          onPress={() =>
            signOut()
              .then(() => console.log('Signed out with Google!'))
              .catch(error =>
                console.error('Error signing out with Google:', error),
              )
          }>
          <StyledButtonText>Log Out</StyledButtonText>
        </StyledButton>
      ) : (
        ''
      )}
      {children}
    </View>
  );
};
export default AccountNavigator;
