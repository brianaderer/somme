// saveWine.js
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/app';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';

const winesCollection = firestore().collection('wines');

const SaveWine = async ({wineProps, user}) => {
  const [location, setLocation] = useState(null);
  Geolocation.getCurrentPosition(
    position => {
      setLocation(position);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
  console.log(location);
  const dateTime = firebase.firestore.FieldValue.serverTimestamp();
  const docID = 'firstWine';
  const {id, visual} = wineProps;
  const docRef = winesCollection.doc(docID);
  try {
    await docRef.update({
      timestamp: dateTime,
      owner: user.providerData[0].uid,
    });
    await docRef.collection('attr').doc('visual').set(visual, {merge: true});
    await docRef.collection('attr').doc('id').set(id, {merge: true});
    console.log('Wine updated!');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

export default SaveWine;
