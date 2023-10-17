import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeCount} from '../actions/counts';
import {connect} from 'react-redux';
import ForwardBack from '../navigation/ForwardBack';

const Palette = props => {
  const {route, navigation, count} = props;
  const style = useContext(StylesContext);
  const next = route.params.next;

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Text style={style.baseText}>Palette Screen</Text>
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