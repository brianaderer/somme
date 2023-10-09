import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import {TextInput} from 'react-native-paper';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeId} from '../actions/id';
import {connect} from 'react-redux';
import ForwardBack from '../navigation/ForwardBack';
import CameraModule from '../modules/CameraModule';
import ModalModule from '../module/ModalModule';

const Identity = props => {
  const {navigation, id, route, actions} = props;
  const next = route.params.next;
  const style = useContext(StylesContext);

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <TextInput
          style={style.textInput}
          label="Producer"
          placeholder={"Chateau d'Yquem"}
          value={id.producer}
          onChangeText={text => actions.changeId({...id, producer: text})}
        />
        <TextInput
          style={style.textInput}
          label="Vintage"
          placeholder={'2001'}
          value={id.vintage}
          onChangeText={text => actions.changeId({...id, vintage: text})}
        />
        <TextInput
          style={style.textInput}
          label="Cuvee"
          placeholder={'Lur Saluces'}
          value={id.cuvee}
          onChangeText={text => actions.changeId({...id, cuvee: text})}
        />
        <ModalModule>
          <CameraModule/>
        </ModalModule>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    id: state.state.id,
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({changeId}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Identity);
