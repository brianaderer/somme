import {View, Text} from '@gluestack-ui/themed';
import React, {useContext, useEffect} from 'react';
import {StyledButton} from '../components/StyledButton';
import {StyledButtonText} from '../components/StyledButtonText';
import {signOut} from '../SignIns/Google';
import {useNavigation} from '@react-navigation/native';
import {DrawerContext} from '../contexts/DrawerContext';

const Account = ({route}) => {
  const greetings = ['Santé', 'Prost', 'Saluti', 'Salud', 'Cheers', 'Saúde'];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const {user} = route.params;
  return (
    <View flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text mb={'$2'}>
        {greeting}, {user.displayName}
      </Text>
      <StyledButton scheme={'outline'} onPress={() => signOut()}>
        <StyledButtonText>Sign Out</StyledButtonText>
      </StyledButton>
    </View>
  );
};
export default Account;
