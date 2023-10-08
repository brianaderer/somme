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
import Home from './components/Home';
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
        {/*<SafeAreaView style={backgroundStyle}>*/}
        {/*  <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
        {/*<ScrollView*/}
        {/*  contentInsetAdjustmentBehavior="automatic"*/}
        {/*  style={backgroundStyle}>*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
        {/*    }}>*/}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: ({current, next, layouts}) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}>
          <Stack.Screen component={Home} name={'Home'} />
          <Stack.Screen component={Counter} name={'Counter'} />
        </Stack.Navigator>
        {/*</View>*/}
        {/*</ScrollView>*/}
        {/*</SafeAreaView>*/}
      </NavigationContainer>
    </StylesContext.Provider>
  );
};

export default App;
