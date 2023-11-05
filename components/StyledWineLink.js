import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setWine} from '../utilities/setWine';
import {StyledButtonText} from './StyledButtonText';
import {StyledButton} from './StyledButton';
import firestore from "@react-native-firebase/firestore";

const StyledWineLink = props => {
  const {wine, uid} = props;
  const [firestoreData, setFirestoreData] = useState(null);
  const dispatch = useDispatch();
  const queryFirestore = async () => {
    return await firestore()
      .collection('wines')
      .doc(wine.id)
      .get();
  };
  const handleSetWine = () => {
    queryFirestore().then(snapshot => {
      if (snapshot) {
        setWine(snapshot, dispatch);
      }
    });
  };

  return (
    <StyledButton scheme={'solid'} onPress={handleSetWine}>
      <StyledButtonText>{wine.id}</StyledButtonText>
    </StyledButton>
  );
};

export default StyledWineLink;
