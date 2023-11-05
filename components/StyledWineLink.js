import React from 'react';
import {useDispatch} from 'react-redux';
import {setWine} from '../utilities/setWine';
import {StyledButtonText} from './StyledButtonText';
import {StyledButton} from './StyledButton';
import firestore from '@react-native-firebase/firestore';
import {materializeAll} from 'firebase-tools/lib/functionsConfig';

const StyledWineLink = props => {
  const {wine, uid, navigation} = props;
  const dispatch = useDispatch();
  const queryFirestore = async () => {
    return await firestore().collection('wines').doc(wine.id).get();
  };
  const handleSetWine = () => {
    queryFirestore().then(snapshot => {
      const id = wine.id;
      if (snapshot) {
        setWine({snapshot, dispatch, id}).then(navigation.navigate('New Wine'));
      }
    });
  };

  return (
    <StyledButton scheme={'expand'} onPress={handleSetWine}>
      <StyledButtonText>{wine.id}</StyledButtonText>
    </StyledButton>
  );
};

export default StyledWineLink;
