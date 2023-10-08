import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import screenConfig from '../screens/screenConfig';
import screenOptions from '../screens/screenOptions';
import {View} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      backBehavior="order"
      initialRouteName="Identity"
      activeColor="white"
      inactiveColor="#f0edf6"
      barStyle={{backgroundColor: '#694fad'}}>
      {screenConfig.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          initialParams={{next: screen.next}}
          options={{
            tabBarIcon: () => null,
          }}
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
