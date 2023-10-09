import React from 'react'
import { useName } from '../contexts/contextProvider'
export default function Child({handleParent}) {
  const{a,setA,c,setB} = useName()
  function handleChange(a)
  {
    handleParent(a)
  }
    
  return (
    <>
    <div>{a}</div>
    <div>{c}</div>
    <div><button onClick={()=>setA(a+1)}>change a</button></div>
    <div><button onClick={()=>handleChange(a)}>change a differently</button></div>
    </>
  )
}
