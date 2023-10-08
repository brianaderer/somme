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
import {
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from './assets/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './components/Home';
import Counter from './components/Counter';
//import Auth from './providers/Auth';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      {/*<SafeAreaView style={backgroundStyle}>*/}
      {/*  <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
      {/*<ScrollView*/}
      {/*  contentInsetAdjustmentBehavior="automatic"*/}
      {/*  style={backgroundStyle}>*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
      {/*    }}>*/}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          initialParams={{styles: styles}}
          component={Home}
          name={'Home'}
        />
        <Stack.Screen
          initialParams={{styles: styles}}
          component={Counter}
          name={'Counter'}
        />
      </Stack.Navigator>
      {/*</View>*/}
      {/*</ScrollView>*/}
      {/*</SafeAreaView>*/}
    </NavigationContainer>
  );
};

export default App;
