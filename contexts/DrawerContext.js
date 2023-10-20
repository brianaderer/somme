import {createContext} from 'react';

export const DrawerContext = createContext({
  navigation: null,
  setNavigation: () => {},
});
