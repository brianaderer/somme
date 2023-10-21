import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeCount} from '../actions/counts';
import {connect} from 'react-redux';
import {Center} from '@gluestack-ui/themed';
import {StyledSlider} from '../components/StyledSlider';

const Palette = props => {
  const {route, navigation, count} = props;
  const style = useContext(StylesContext);
  const next = route.params.next;
  const foo = bar => {
    console.log(bar);
  };
  const lookup = {
    0: 'N/A',
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };
  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Center w={300} h={100}>
          <StyledSlider heading={'Foo'} lookup={lookup} changeFX={foo} min={0} max={3} defaultValue={0} />
        </Center>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({changeCount}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
