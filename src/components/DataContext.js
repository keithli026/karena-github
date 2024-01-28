import React, { createContext, useRef } from 'react'

export const DataContext = createContext();
 
export const DataProvider = ({children}) => {

  const elementRef = useRef(null);
  
  return (
    <DataContext.Provider value={{ elementRef }}>
      { children }
    </DataContext.Provider>
  );
}

