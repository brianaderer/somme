import {Text, View} from 'react-native';
import React from 'react';

const Home: () => Node = ({route}) => {
  const style = route.params.styles;
  return (
    <View style={style.homeStyles}>
      <Text style={style.baseText}>Home Screen</Text>
    </View>
  );
};
export default Home;
