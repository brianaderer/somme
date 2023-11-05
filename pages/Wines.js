import {View, Text} from '@gluestack-ui/themed';
import {StyledButton} from '../components/StyledButton';
import {StyledButtonText} from '../components/StyledButtonText';
import React, {useContext} from 'react';
import StylesContext from '../contexts/StylesContext';
import UserContext from '../contexts/UserContext';
import {addWine} from '../utilities/addWine';
import { useLocation } from "../contexts/LocationContext";
import { bindActionCreators } from "redux";
import { changeMeta } from "../actions/meta";
import { connect } from "react-redux";

const Wines = props => {
  const {location, requestLocation} = useLocation();
  const {navigation, meta, actions} = props;
  const {user, initializing} = useContext(UserContext);
  const uid = user.providerData[0].uid;
  const addWineHandler = () => {
    addWine({uid, location, meta, actions}).then(
      navigation.navigate('New Wine'),
    );
  };
  const style = useContext(StylesContext);
  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        <Text style={style.baseText}>Wines Screen</Text>
        <StyledButton scheme={'outline'} onPress={() => addWineHandler()}>
          <StyledButtonText>Add a Wine</StyledButtonText>
        </StyledButton>
        {/*<ForwardBack navigation={navigation} next={next} />*/}
      </View>
    </View>
  );
};
const mapStateToProps = state => ({
  meta: state.state.meta,
});
const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({changeMeta}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
