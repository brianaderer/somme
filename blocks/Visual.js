import {View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeVisual} from '../actions/visual';
import {connect} from 'react-redux';
import {Center} from '@gluestack-ui/themed';
import {StyledSlider} from '../components/StyledSlider';
import {lookups} from '../assets/lookups';

const Visual = props => {
  const {visual, actions} = props;
  const {route} = props;
  const style = useContext(StylesContext);
  const next = route.params.next;
  const Set = (value, slug) => {
    actions.changeVisual({
      ...visual,
      [slug]: value,
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Center w={300} h={100}>
          <StyledSlider
            heading={'Clarity'}
            lookup={lookups.Clarity}
            changeFX={Set}
            min={0}
            max={3}
            defaultValue={0}
            slug={'Clarity'}
          />
        </Center>
        <Center w={300} h={100}>
          <StyledSlider
            heading={'Concentration'}
            lookup={lookups.Concentration}
            changeFX={Set}
            min={0}
            max={3}
            defaultValue={0}
            slug={'Concentration'}
          />
        </Center>
        <Center w={300} h={100}>
          <StyledSlider
            heading={'Extract/Staining'}
            lookup={lookups.Extract}
            changeFX={Set}
            min={0}
            max={3}
            defaultValue={0}
            slug={'Extract'}
          />
        </Center>
        <Center w={300} h={100}>
          <StyledSlider
            heading={'Tearing'}
            lookup={lookups.Tearing}
            changeFX={Set}
            min={0}
            max={3}
            defaultValue={0}
            slug={'Tearing'}
          />
        </Center>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  visual: state.state.visual,
});
const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({changeVisual}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Visual);
