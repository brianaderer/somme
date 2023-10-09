/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';;
import 'react-native-gesture-handler';
import { Text, useColorScheme } from "react-native";


import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Require cycle:']);

const App = () => {

  return (
    <Text>
      Foo
    </Text>
  );
};

export default App;
