import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeVisual} from '../actions/visual';
import ForwardBack from '../navigation/ForwardBack';
import CustomTabBar from '../navigation/CustomTabBar'; // <-- Import the custom tab bar here

const Conclusion = props => {
  const {route, navigation} = props;
  const style = useContext(StylesContext);
  const next = route.params.next;

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Text style={style.baseText}>Conclusion Screen</Text>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  visual: state.visual,
});

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({changeVisual}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Conclusion);
