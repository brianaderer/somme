import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import screenConfig from '../screens/screenConfig';
import Home from '../components/Home';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      backBehavior={'order'}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }}
          renderIcon={({route, focused, color}) => {
            const iconName = focused
              ? route.params.focusedIcon
              : route.params.unfocusedIcon;
            return <Icon name={iconName} size={24} color={color} />;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}>
      {screenConfig.map(screen => {
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            initialParams={{
              focusedIcon: screen?.focusedIcon || 'heart',
              unfocusedIcon: screen?.unfocusedIcon || 'heart-outline',
              next: screen.next,
            }}
            options={{
              tabBarLabel: screen.name,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
