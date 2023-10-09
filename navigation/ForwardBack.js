import {View} from 'react-native';
import * as React from 'react';
import {Button} from 'react-native-paper';
import {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
const ForwardBack: () => Node = props => {
  const style = useContext(StylesContext);
  const {navigation, next} = props;
  return (
    <View>
      {next != null && (
        <Button
          icon="arrow-right-bold"
          mode="outlined"
          onPress={() => navigation.navigate(next)}>
          {next}
        </Button>
      )}
      {navigation.canGoBack() && (
        <Button
          icon="arrow-left-bold"
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={style.navButton}>
          Back
        </Button>
      )}
    </View>
  );
};

export default ForwardBack;
