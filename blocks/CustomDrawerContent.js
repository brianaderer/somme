import {StyledButton, StyledButtonText} from '../components/StyledButton';
import {signOut} from '../SignIns/Google';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Add other drawer items */}
      <DrawerItem
        label="Feed"
        onPress={() => props.navigation.navigate('Feed')}
      />
      {/* Add more DrawerItem components for other routes as needed */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
