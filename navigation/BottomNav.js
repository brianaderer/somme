import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ScreenConfig from '../screens/ScreenConfig';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      {ScreenConfig.map(screen => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          initialParams={{next: screen.next}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;
