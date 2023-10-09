import {View} from 'react-native';
import * as React from 'react';
import {Button} from 'react-native-paper';
import {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
const ForwardBack: () => Node = props => {
  const style = useContext(StylesContext);
  const {navigation, next} = props;
  return (
    <View style={style.container}>
      {next != null && (
        <Button
          icon="arrow-right-bold"
          mode="text"
          onPress={() => navigation.navigate(next)}
          style={[style.rightButton, style.button]}
        />
      )}
      {navigation.canGoBack() && (
        <Button
          icon="arrow-left-bold"
          mode="text"
          onPress={() => navigation.goBack()}
          style={[style.button, style.leftButton]}
        />
      )}
    </View>
  );
};

export default ForwardBack;
