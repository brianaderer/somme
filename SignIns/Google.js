import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_other_platform_client_id} from '@env';

let isGoogleSignInConfigured = false;

if (!isGoogleSignInConfigured) {
  GoogleSignin.configure({
    webClientId: GOOGLE_other_platform_client_id,
  });
  isGoogleSignInConfigured = true;
}

export async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Error during Google Sign-In', error);
    throw error; // Or handle it in some other way
  }
}

export async function signOut() {
  try {
    // Sign out from Google Sign-In
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();

    // Sign out from Firebase Authentication
    await auth().signOut();
  } catch (error) {
    console.error('Error during Google Sign-Out', error);
    throw error; // Or handle it in some other way
  }
}
