// saveWine.js
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/app';

const winesCollection = firestore().collection('wines');

export const saveWine = async ({wineProps, user, location}) => {
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
