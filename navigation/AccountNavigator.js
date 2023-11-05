import React, {useContext, useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import WineNavigator from './WineNavigator';
import Wines from "../pages/Wines";
import Account from '../pages/Account';
import {useDrawerStatus} from '@react-navigation/drawer';
import {View} from '@gluestack-ui/themed';
import {DrawerContext} from '../contexts/DrawerContext';
import {StyledButton} from '../components/StyledButton';
import {StyledIcon} from '../components/StyledIcon'; // Import the context
import {config} from '../config/gluestack-ui.config';
import {requestLocationPermission} from '../utilities/permissions';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  requestLocationPermission();
  const {navigation} = props;
  const isDrawerOpenStatus = useDrawerStatus() === 'open';
  const {setDrawerOpenState} = useContext(DrawerContext);
  const {setNavigationRef} = useContext(DrawerContext);

  useEffect(() => {
    setNavigationRef(navigation);
  }, [navigation, setNavigationRef]);

  useEffect(() => {
    setDrawerOpenState(isDrawerOpenStatus);
  }, [isDrawerOpenStatus, setDrawerOpenState]);

  return (
    <DrawerContentScrollView {...props}>
      {/* Existing drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const AccountNavigator = ({children, user}) => {
  const sommeColors = config.tokens.colors;
  const {navigationRef, isDrawerOpen} = useContext(DrawerContext); // Consume the navigation object and drawer open state
  return (
    <View flex={1}>
      <View style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}>
        <StyledButton
          {...(isDrawerOpen
            ? {bg: '$sommeSecondary'}
            : {bg: '$sommeUIBackground'})}
          scheme={'round'}
          title="Toggle Drawer"
          onPress={() => navigationRef?.toggleDrawer()}>
          <StyledIcon
            size={30}
            name={isDrawerOpen ? 'menu-open' : 'menu'}
            color={'$sommeTextActive'}
          />
        </StyledButton>
      </View>
      <Drawer.Navigator
        screenOptions={{
          swipeEnabled: false,
          drawerActiveTintColor: sommeColors.sommeTextChrome,
          drawerActiveBackgroundColor: sommeColors.sommeSecondary,
          headerShown: false,
          drawerStyle: {
            backgroundColor: sommeColors.sommeUIBackground,
            paddingTop: 80,
          },
        }}
        initialRouteName={'Wines'}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Wines" component={Wines} />
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
