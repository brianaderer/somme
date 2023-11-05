// saveWine.js
import firestore from '@react-native-firebase/firestore';
import { Timestamp } from "@react-native-firebase/firestore/lib/modular/Timestamp";
import { firebase } from "@react-native-firebase/app";

const winesCollection = firestore().collection('wines');

const saveWine = async ({wineProps, user}) => {
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

export default saveWine;
