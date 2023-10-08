import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeCount} from '../actions/counts';
import {connect} from 'react-redux';
import ForwardBack from '../navigation/ForwardBack';

const Nose: () => Node = props => {
  const {route, navigation, count} = props;
  const style = useContext(StylesContext);
  return (
    <View style={style.homeStyles}>
      <Text style={style.baseText}>Nose Screen {count.count}</Text>
      <ForwardBack navigation={navigation} next={route.params.next} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Nose);
