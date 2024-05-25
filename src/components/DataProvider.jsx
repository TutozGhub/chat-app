import React, { useState } from 'react'
import { createContext } from 'react'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const DataContext = createContext();

export default function DataProvider({children}) {
    
  const [user] = useAuthState(auth);
  const [isMobile, setIsMobile] = useState(false);
  const [isOnLogin, setIsOnLogin] = useState(false);

  return (
    <DataContext.Provider value={{user, isMobile, setIsMobile, isOnLogin, setIsOnLogin}}>
        {children}
    </DataContext.Provider>
  )
}
