import React, {useContext, useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button} from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import Account from '../blocks/Account';
import {useDrawerStatus} from '@react-navigation/drawer';
import {View} from '@gluestack-ui/themed';
import {DrawerContext} from '../contexts/DrawerContext';
import {StyledButton} from '../components/StyledButton';
import {StyledButtonText} from '../components/StyledButtonText'; // Import the context

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <DrawerContentScrollView {...props}>
      {/* Existing drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const AccountNavigator = ({children, user}) => {
  const {navigation} = useContext(DrawerContext); // Consume the navigation object from the context
  return (
    <View flex={1}>
      <View style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}>
        <StyledButton
          scheme={'outline'}
          title="Toggle Drawer"
          onPress={() => navigation.toggleDrawer()}>
          <StyledButtonText>Toggle</StyledButtonText>
        </StyledButton>
      </View>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            paddingTop: 80,
          },
        }}
        initialRouteName={'Account'}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Wines" component={AppNavigator} />
        <Drawer.Screen
          name="Account"
          component={Account}
          initialParams={{user: user}}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default AccountNavigator;
