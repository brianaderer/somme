import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {UserProvider} from '../contexts/UserContext';

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
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);

  return <UserProvider value={{user, initializing}}>{children}</UserProvider>;
};
export default AuthWrapper;
