import {firebase} from '@react-native-firebase/app';

// Firebase config object
const firebaseConfig = {
  project_info: {
    project_number: '54136313027',
    project_id: 'sommme-8f45f',
    storage_bucket: 'sommme-8f45f.appspot.com',
  },
  client: [
    {
      client_info: {
        mobilesdk_app_id: '1:54136313027:android:dd31753cfc433d52343e76',
        android_client_info: {
          package_name: 'com.somm725',
        },
      },
      oauth_client: [],
      api_key: [
        {
          current_key: 'AIzaSyCRRRbwIYENIg7Y19BzGkr07qRzIOaADNc',
        },
      ],
      services: {
        appinvite_service: {
          other_platform_oauth_client: [],
        },
      },
    },
  ],
  configuration_version: '1',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
