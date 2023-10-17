import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_SERVICES} from '@env';

console.log(GOOGLE_SERVICES);

GoogleSignin.configure({
  webClientId: '',
});

export default GoogleSignin;
