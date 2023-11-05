// saveWine.js
import firestore from '@react-native-firebase/firestore';

const winesCollection = firestore().collection('wines');

export const saveWine = async ({wineProps}) => {
  const docID = wineProps.meta.ID;
  const {id, visual} = wineProps;
  const docRef = winesCollection.doc(docID);
  try {
    await docRef.collection('attr').doc('visual').set(visual, {merge: true});
    await docRef.collection('attr').doc('id').set(id, {merge: true});
    console.log('Wine updated!');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};
