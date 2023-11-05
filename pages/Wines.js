import {View, Text} from '@gluestack-ui/themed';
import {StyledButton} from '../components/StyledButton';
import {StyledButtonText} from '../components/StyledButtonText';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';

const Wines = props => {
  const {navigation} = props;
  const addWineHandler = () => {
    navigation.navigate('New Wine')
  };
  const style = useContext(StylesContext);
  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Text style={style.baseText}>Wines Screen</Text>
        <StyledButton
          scheme={'outline'}
          onPress={() => addWineHandler()}>
          <StyledButtonText>Add a Wine</StyledButtonText>
        </StyledButton>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};
export default Wines;
