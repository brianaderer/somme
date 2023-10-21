import {ScrollView, View} from '@gluestack-ui/themed';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
export const ScreenWrapper = ({children}) => {
  const style = useContext(StylesContext);
  return (
    <ScrollView>
      <View pb={'$12'} pt={'$20'} style={style.homeStyles}>
        {children}
      </View>
    </ScrollView>
  );
};
