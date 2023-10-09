import React from 'react'
import { useName } from '../contexts/contextProvider'
import Child from './Child'
export default function Parent() {
    const{a,setA,c,setB} = useName()
    function handleParent()
    {
        setA(a+1)
    }

  return (
    <div>
    <Child handleParent={handleParent}/>
    
    </div>
  )
}
