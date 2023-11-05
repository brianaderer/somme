import {View, Text} from '@gluestack-ui/themed';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';

const Wines = () => {
  const style = useContext(StylesContext);
  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Text style={style.baseText}>Wines Screen</Text>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};
export default Wines;
