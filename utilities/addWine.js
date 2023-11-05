import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/app';
// Add a new document with a generated id.

const winesCollection = firestore().collection('wines');
export const addWine = async props => {
  const {uid, location, meta, actions} = props;
  const dateTime = firebase.firestore.FieldValue.serverTimestamp();
  winesCollection
    .add({
      location: location,
      owner: uid,
      timestamp: dateTime,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
      actions.changeMeta({
        owner: uid,
        location: location,
        ID: docRef.id,
      });
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};
