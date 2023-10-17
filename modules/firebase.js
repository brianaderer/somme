import {firebase} from '@react-native-firebase/app';
import {GOOGLE_SERVICES} from '@env';

// Firebase config object
const firebaseConfig = GOOGLE_SERVICES;

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
