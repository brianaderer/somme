import {View, Text} from '@gluestack-ui/themed';
import {StyledButton} from '../components/StyledButton';
import {StyledButtonText} from '../components/StyledButtonText';
import React, {useContext, useState, useEffect} from 'react';
import StylesContext from '../contexts/StylesContext';
import UserContext from '../contexts/UserContext';
import {addWine} from '../utilities/addWine';
import {useLocation} from '../contexts/LocationContext';
import {bindActionCreators} from 'redux';
import {changeMeta} from '../actions/meta';
import {resetState} from "../actions/reset";
import {connect} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import StyledWineLink from "../components/StyledWineLink";

const Wines = props => {
  const [retrievedWines, setRetrievedWines] = useState([]);
  const {location, requestLocation} = useLocation();
  const {navigation, meta, actions} = props;
  const {user, initializing} = useContext(UserContext);
  const uid = user?.providerData[0]?.uid;
  useEffect(() => {
    const wine = firestore()
      .collection('wines')
      .orderBy('timestamp', 'desc')
      .where('owner', '==', uid)
      .onSnapshot(querySnapshot => {
        // Map through the documents and return the data
        const wines = querySnapshot.docs.map(doc => ({
          id: doc.id, // don't forget to get the document ID if you need it
          ...doc.data(), // spread operator to get all the fields in the object
        }));
        setRetrievedWines(wines); // Set the state with the new data
      });
    // Stop listening for updates when no longer required
    return () => wine();
  }, [uid]);
  const addWineHandler = () => {
    addWine({uid, location, meta, actions}).then(
      navigation.navigate('New Wine'),
    );
  };
  const style = useContext(StylesContext);
  return (
    <View style={{flex: 1}}>
      <View style={style.homeStyles}>
        {retrievedWines.map(wine => {
          return (
            <StyledWineLink
              navigation={navigation}
              uid={uid}
              key={wine.id}
              wine={wine}
            />
          );
        })}
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
  const actions = bindActionCreators({changeMeta, resetState}, dispatch);
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
