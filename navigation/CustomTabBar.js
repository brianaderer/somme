import React from 'react';
import {View, Button} from 'react-native';
import screenConfig from '../screens/screenConfig';

const CustomTabBar = ({navigation, activeRoute}) => {
  return (
    <View>
      {screenConfig.map(screen => (
        <Button
          key={screen.name}
          title={screen.name}
          onPress={() => navigation.navigate(screen.name)}
        />
      ))}
    </View>
  );
};

export default CustomTabBar;
