import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import screenConfig from '../screens/screenConfig';
import screenOptions from '../screens/screenOptions';
import CustomTabBar from '../navigation/CustomTabBar';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      {screenConfig.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          initialParams={{next: screen.next}}
        />
      ))}
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      {/* Other Stack.Screens if necessary */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
