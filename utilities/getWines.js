import firestore from '@react-native-firebase/firestore';

const winesCollection = firestore().collection('wines');
export const getWines = async props => {
  const {uid} = props;
  console.log(uid);
  return await winesCollection.where('owner', '==', uid).get();
};
