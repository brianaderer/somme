// DrawerManager.js
import { useState } from 'react';
import { DrawerContext } from '../contexts/DrawerContext';

export const DrawerManager = ({ children }) => {
  const [navigation, setNavigation] = useState(null);

  return (
    <DrawerContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </DrawerContext.Provider>
  );
};
