import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import screenConfig from '../screens/screenConfig';

const AppNavigator = () => {
  const [index, setIndex] = React.useState(0);

  // Convert your screenConfig into the required routes format
  const [routes] = React.useState(
    screenConfig.map(screen => ({
      key: screen.name.toLowerCase(),
      title: screen.name,
      focusedIcon: 'heart', // placeholder icons, replace with your own
      unfocusedIcon: 'heart-outline', // placeholder icons, replace with your own
    })),
  );

  // Create a SceneMap from the screenConfig's components
  const renderScene = BottomNavigation.SceneMap(
    screenConfig.reduce((acc, screen) => {
      acc[screen.name.toLowerCase()] = screen.component;
      return acc;
    }, {}),
  );

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default AppNavigator;
