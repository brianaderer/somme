import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Button} from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import Account from '../blocks/Account';
import {useDrawerStatus} from '@react-navigation/drawer';
import { signOut } from "../SignIns/Google";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <DrawerContentScrollView {...props}>
      <Button
        title="Toggle Drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Button
        title="Sign Out"
        onPress={() => signOut()}
      />
      {/* Existing drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const AccountNavigator = ({children, user}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      defaultStatus={'open'}
      initialRouteName={'Account'}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Wines" component={AppNavigator} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
};

export default AccountNavigator;
