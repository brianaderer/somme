/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {useColorScheme} from 'react-native';
import {styles} from './assets/styles';
import StylesContext from './contexts/StylesContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import ScreenConfig from './screens/ScreenConfig';
import screenOptions from './screens/screenOptions';
import BottomNav from './navigation/BottomNav';
import Counter from './components/Counter';
//import Auth from './providers/Auth';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StylesContext.Provider value={styles}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Identity"
          screenOptions={screenOptions}>
          {ScreenConfig.map(screen => (
            <Stack.Screen
              key={screen.name}
              component={screen.component}
              name={screen.name}
              initialParams={{next: screen.next}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </StylesContext.Provider>
  );
};

export default App;
