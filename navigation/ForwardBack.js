import {Button, View} from 'react-native';
import React from 'react';
const ForwardBack: () => Node = props => {
  const {navigation, next} = props;
  return (
    <View>
      {next != null && (
        <Button
          title={`${next} ->`}
          onPress={() => navigation.navigate(next)}
        />
      )}
      {navigation.canGoBack() && (
        <Button title="<- Go Back" onPress={() => navigation.goBack()} />
      )}
    </View>
  );
};

export default ForwardBack;
