import React from 'react';
import { Button, Text, View } from "react-native";
import {changeCount} from '../actions/counts';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const Counter: () => Node = props => {
  const {count, actions, route, navigation} = props;
  const style = route.params.styles;

  function decrementCount() {
    actions.changeCount(count.count - 1);
  }

  function incrementCount() {
    actions.changeCount(count.count + 1);
  }
  return (
    <View style={style.homeStyles}>
      <Button title="increment" onPress={incrementCount} />
      <Text style={style.baseText}>{count.count}</Text>
      <Button title="decrement" onPress={decrementCount} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
