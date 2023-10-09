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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Require cycle:']);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StylesContext.Provider value={styles}>
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </GluestackUIProvider>
      </SafeAreaProvider>
    </StylesContext.Provider>
  );
};

export default App;
