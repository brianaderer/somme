// DrawerManager.js
import {useState} from 'react';
import {DrawerContext} from '../contexts/DrawerContext';

export const DrawerManager = ({children}) => {
  const [navigation, setNavigation] = useState(null);
  const [isDrawerOpen, setDrawerOpenState] = useState(false);

  return (
    <DrawerContext.Provider
      value={{navigation, setNavigation, isDrawerOpen, setDrawerOpenState}}>
      {children}
    </DrawerContext.Provider>
  );
};
