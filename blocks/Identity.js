import {Image, Text, View} from 'react-native';
import React, {useContext} from 'react';
import StyledTextInput from '../components/StyledTextInput';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeId} from '../actions/id';
import {connect} from 'react-redux';
import ForwardBack from '../navigation/ForwardBack';
import CameraModule from '../modules/CameraModule';
import ModalModule from '../modules/ModalModule';
import {ButtonIcon, EditIcon, HStack} from '@gluestack-ui/themed';
import {Button} from '../components/Button';

const Identity = props => {
  const {navigation, id, route, actions} = props;
  const next = route.params.next;
  const style = useContext(StylesContext);
  const deleteImage = () => {
    actions.changeId({...id, label: ''});
  };

  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <StyledTextInput
          style={style.textInput}
          label="Producer"
          value={id.producer}
          onChangeText={text => actions.changeId({...id, producer: text})}
        />
        <StyledTextInput
          style={style.textInput}
          label="Vintage"
          value={id.vintage}
          onChangeText={text => actions.changeId({...id, vintage: text})}
        />
        <StyledTextInput
          style={style.textInput}
          label="Cuvee"
          value={id.cuvee}
          onChangeText={text => actions.changeId({...id, cuvee: text})}
        />
        {id.label && (
          <View
            style={{
              position: 'relative',
              width: 300,
              height: 300,
              marginTop: 20,
            }}>
            <Image
              source={{uri: id.label}}
              style={{width: '100%', height: '100%'}}
            />
            <HStack
              style={{position: 'absolute', bottom: 10, right: 10, zIndex: 1}}>
              <Button
                scheme={'round'}
                borderRadius="$full"
                size="s"
                p="2"
                w="$12"
                h="$12"
                style={{marginRight: 8}}
                onPress={deleteImage}>
                <ButtonIcon as={EditIcon} />
              </Button>
              <Button
                scheme={'round'}
                borderRadius="$full"
                size="s"
                p="2"
                w="$12"
                h="$12"
                onPress={deleteImage}>
                <ButtonIcon flex={'1'} as={EditIcon} />
              </Button>
            </HStack>
          </View>
        )}
        <ModalModule showButton={id.label} title={'Capture Label'}>
          <CameraModule style={{flex: 1}} actions={actions} state={id} />
        </ModalModule>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    id: state.state.id,
  };
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({changeId}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Identity);
