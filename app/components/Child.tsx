import React from 'react'
import { useName } from '../contexts/contextProvider'
export default function Child() {
  const{a,setA,b,setB,handleParent} = useName()
  function handleChange(a:number)
  {
    setB(b+1);
    handleParent(a)
    
  }
    
  return (
    <>
    <div>{a}</div>
    <div>{b}</div>
    <div><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onClick={()=>setA(a+1)}>change a</button></div>
    <div className='mt-1'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded' onClick={()=>handleChange(a)}>change a through context</button></div>
    </>
  )
}
