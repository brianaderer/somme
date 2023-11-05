import firestore from '@react-native-firebase/firestore';

const winesCollection = firestore().collection('wines');

const saveWine = props => {
  winesCollection
    .doc('firstWine')
    .update(props)
    .then(() => {
      console.log('Wine updated!');
    })
    .catch(error => {
      console.error('Error updating document: ', error);
    });
};
export default saveWine;
