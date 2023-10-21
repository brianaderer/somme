// DrawerManager.js
import {useState} from 'react';
import {DrawerContext} from '../contexts/DrawerContext';

export const DrawerManager = ({children}) => {
  const [navigationRef, setNavigationRef] = useState(null);
  const [isDrawerOpen, setDrawerOpenState] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        navigationRef,
        setNavigationRef,
        isDrawerOpen,
        setDrawerOpenState,
      }}>
      {children}
    </DrawerContext.Provider>
  );
};
