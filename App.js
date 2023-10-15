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

LogBox.ignoreLogs(['Require cycle:']);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StylesContext.Provider value={styles}>
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <NavigationContainer bg={'$sommeMainBackground'}>
            <AppNavigator />
          </NavigationContainer>
        </GluestackUIProvider>
      </SafeAreaProvider>
    </StylesContext.Provider>
  );
};

export default App;
