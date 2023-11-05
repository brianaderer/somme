// LocationContext.js
import React, {createContext, useState, useEffect, useContext} from 'react';
import Geolocation from 'react-native-geolocation-service';

// Create the context
export const LocationContext = createContext(null);

// Create a provider component
export const LocationProvider = ({children}) => {
  const [location, setLocation] = useState(null);
  const requestLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 0},
    );
  };

  useEffect(() => {
    requestLocation();
    // Optional: Add event listener for location updates if needed

    // Cleanup function
    return () => {
      // Optional: Remove event listener for location updates if added
    };
  }, []);

  // Provide the location state and setter to children
  return (
    <LocationContext.Provider value={{location, requestLocation}}>
      {children}
    </LocationContext.Provider>
  );
};

// Hook to use the location context
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
