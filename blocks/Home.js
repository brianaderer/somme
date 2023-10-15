import {Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeCount} from '../actions/counts';
import {connect} from 'react-redux';

const Home: () => Node = ({route, navigation, count}) => {
  const style = useContext(StylesContext);
  return (
    <View style={style.homeStyles}>
      <Text style={style.baseText}>Home Screen {count.count}</Text>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
