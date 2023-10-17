/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {useColorScheme} from 'react-native';
import {styles} from './assets/styles';
import StylesContext from './contexts/StylesContext';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from './config/gluestack-ui.config'; // Relative path to your ejected theme configuration
import {LogBox} from 'react-native';
import AuthWrapper from './providers/Auth';
import UserContext from './contexts/UserContext';
import {useContext} from 'react';
import Login from './blocks/Login.js';

LogBox.ignoreLogs(['Require cycle:']);

const MainComponent = () => {
  const {user, initializing} = useContext(UserContext);
  console.log(user);
  console.log(initializing);

  // You can use the user and initializing values here
  return (
    <StylesContext.Provider value={styles}>
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            {user ? <AppNavigator /> : <Login />}
          </NavigationContainer>
        </GluestackUIProvider>
      </SafeAreaProvider>
    </StylesContext.Provider>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const sommeColors = config.tokens.colors;

  return (
    <AuthWrapper>
      <MainComponent />
    </AuthWrapper>
  );
};

export default App;
