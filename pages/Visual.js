import React from 'react';
import {bindActionCreators} from 'redux';
import {changeVisual} from '../actions/visual';
import {connect} from 'react-redux';
import {Center} from '@gluestack-ui/themed';
import {StyledSlider} from '../components/StyledSlider';
import {StyledSwitch} from '../components/StyledSwitch';
import {lookups} from '../assets/lookups';
import {StyledColorPicker} from '../components/StyledColorPicker';
import {ScreenWrapper} from '../modules/ScreenWrapper';

const Visual = props => {
  const {visual, actions} = props;
  const {route} = props;
  const next = route.params.next;
  const Set = updates => {
    actions.changeVisual({
      ...visual,
      ...updates,
    });
  };

  return (
    <ScreenWrapper>
      <Center w={300} h={100}>
        <StyledSlider
          heading={'Clarity'}
          lookup={lookups.Clarity}
          changeFX={Set}
          min={0}
          max={3}
          defaultValue={0}
          slug={'Clarity'}
          value={visual.Clarity}
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
          value={visual.Concentration}
        />
      </Center>
      <Center mb={'$8'} mt={'$8'} w={300}>
        <StyledColorPicker changeFX={Set} slug={'pColor'} value={visual.pColor.slug} />
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
          value={visual.Extract}
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
          value={visual.Tearing}
        />
      </Center>
      <Center w={300} h={100}>
        <StyledSwitch
          heading={'Gas Evidence'}
          slug={'Gas'}
          defaultValue={false}
          lookup={lookups.Gas}
          changeFX={Set}
          value={visual.Gas}
        />
      </Center>
      {/*<ForwardBack navigation={navigation} next={next} />*/}
    </ScreenWrapper>
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
