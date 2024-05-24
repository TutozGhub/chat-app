import React from 'react'
import { createContext } from 'react'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const DataContext = createContext();

export default function DataProvider({children}) {
    
  const [user] = useAuthState(auth);

  return (
    <DataContext.Provider value={{user}}>
        {children}
    </DataContext.Provider>
  )
}
