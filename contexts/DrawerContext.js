import {createContext} from 'react';

export const DrawerContext = createContext({
  navigationRef: null,
  navigation: null,
  setNavigation: () => {},
  setDrawerOpenState: () => {},
});
