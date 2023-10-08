import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeCount} from '../actions/counts';
import {connect} from 'react-redux';
import ForwardBack from '../navigation/ForwardBack';
import CustomTabBar from '../navigation/CustomTabBar'; // <-- Import the custom tab bar here

const Conclusion = props => {
  const {next, navigation, count} = props;
  const style = useContext(StylesContext);

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Text style={style.baseText}>Conclusion Screen {count.count}</Text>
        <ForwardBack navigation={navigation} next={next} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Conclusion);
