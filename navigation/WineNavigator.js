import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import screenConfig from '../screens/screenConfig';
import {config} from '../config/gluestack-ui.config';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

const WineNavigator = props => {
  const {wineProps} = props;
  const sommeColors = config.tokens.colors;
  useEffect(() => {
    // Your update logic here
    console.log('Staet has been updated', wineProps);

    // You might also want to do something when the component unmounts,
    // for that, you return a function from here which will be the cleanup function.
    return () => {
      // Clean up logic here
      console.log('Cleanup when Visual is unmounted or before next update');
    };
  }, [wineProps]);

  return (
    <Tab.Navigator
      backBehavior={'order'}
      sceneContainerStyle={{backgroundColor: sommeColors.sommeMainBackground}}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          activeColor={sommeColors.sommeTextActive}
          inactiveColor={sommeColors.sommeTextChrome}
          theme={{colors: {secondaryContainer: sommeColors.sommeSecondary}}}
          style={{
            backgroundColor: sommeColors.sommePrimary,
          }}
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
              color: '$sommeTextChrome',
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
};
const mapStateToProps = state => ({
  wineProps: state.state,
});
export default connect(mapStateToProps)(WineNavigator);
