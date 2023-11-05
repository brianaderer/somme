import firestore from '@react-native-firebase/firestore';

const winesCollection = firestore().collection('wines');
export const getWines = async props => {
  const {uid} = props;
  return await winesCollection
    .orderBy('timestamp', 'desc')
    .where('owner', '==', uid)
    .get();
};
