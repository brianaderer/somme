import {Image, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {TextInput} from 'react-native-paper';
import StylesContext from '../contexts/StylesContext';
import {bindActionCreators} from 'redux';
import {changeId} from '../actions/id';
import {connect} from 'react-redux';
import ForwardBack from '../navigation/ForwardBack';
import CameraModule from '../modules/CameraModule';
import ModalModule from '../modules/ModalModule';
import {Button, ButtonIcon, EditIcon, HStack} from '@gluestack-ui/themed';

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
        {id.label && (
          <>
            <Image
              source={{uri: id.label}}
              style={{width: 300, height: 300, marginTop: 20}}
            />
            <HStack>
              <Button
                borderRadius="$full"
                size="s"
                p="2"
                bg="$indigo600"
                borderColor="$indigo600"
                w="$12"
                h="$12"
                onPress={deleteImage}>
                {/* EditIcon is imported from 'lucide-react-native' */}
                <ButtonIcon as={EditIcon} />
              </Button>
              <Button
                borderRadius="$full"
                size="s"
                p="2"
                bg="$indigo600"
                borderColor="$indigo600"
                w="$12"
                h="$12"
                onPress={deleteImage}>
                {/* EditIcon is imported from 'lucide-react-native' */}
                <ButtonIcon as={EditIcon} />
              </Button>
            </HStack>
          </>
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
