"use client"
import React, { createContext, useContext, useState } from 'react';
type ContextType = {
  a:number
  setA:(s:number)=>void
  b:number
  setB:(s:number)=>void
  handleParent:any
}
const Context = createContext<ContextType | undefined>(undefined);

interface NameProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: NameProviderProps) {
  const[a,setA] = useState(0)
  const[b,setB] = useState(1)
  function handleParent()
    {
        setA(a+1)
    }
  return (
    <Context.Provider value={{a,setA,b,setB,handleParent}}>
      {children}
    </Context.Provider>
  )
}

export function useName() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useName must be used within a NameProvider");
  }
  return context;
}
