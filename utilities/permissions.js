import {PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Required',
        message:
          'We would like to access your location to help you track your wines by tasting location.',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      // Now you can call your method that requires location access
    } else {
      console.log('Location permission denied');
      // Handle the case where permission is not granted
    }
  } catch (err) {
    console.warn(err);
  }
};

// Now you can import this function in other files using:
// import { requestLocationPermission } from './path_to_this_file';
