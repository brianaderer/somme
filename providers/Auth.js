import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {UserProvider} from '../contexts/UserContext';
import firebase from '../modules/firebase';

const AuthWrapper = ({children}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <UserProvider value={{user, initializing}}>{children}</UserProvider>;
};
export default AuthWrapper;
