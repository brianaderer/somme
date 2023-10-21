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
    0: 'inactive',
    1: 'low',
    2: 'medium',
    3: 'high',
  };
  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Center w={300} h={100}>
          <StyledSlider lookup={lookup} changefx={foo} min={0} max={3} defaultValue={0} />
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
