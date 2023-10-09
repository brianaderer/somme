import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeCount} from '../actions/counts';
import {connect} from 'react-redux';
import ModalModule from "../module/ModalModule";
import ForwardBack from '../navigation/ForwardBack';
import CustomTabBar from '../navigation/CustomTabBar'; // <-- Import the custom tab bar here

const Palette = props => {
  const {route, navigation, count} = props;
  const style = useContext(StylesContext);
  const next = route.params.next;

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <ModalModule></ModalModule>
        <Text style={style.baseText}>Visual Screen</Text>
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
