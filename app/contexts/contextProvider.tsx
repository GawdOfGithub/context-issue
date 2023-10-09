"use client"
import React, { createContext, useContext, useState } from 'react';
type ContextType = {
  a:number
  setA:(s:number)=>void
  c:number
  setB:(s:number)=>void
}
const Context = createContext<ContextType | undefined>(undefined);

interface NameProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: NameProviderProps) {
  const[a,setA] = useState(0)
  const[c,setB] = useState(1)
  // drop all the hoooks here 
  return (
    <Context.Provider value={{a,setA,c,setB}}>
      {children}
    </Context.Provider>
  );
}

export function useName() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
}
