'use client'
import Image from "next/image";
import React from 'react'
import Child from "./components/Child";
import Parent from "./components/Parent";
import { useName } from "./contexts/contextProvider";
type Props = {}

export default function Page({}: Props) {
  const{a,setA,c,setB} = useName()
  
  return (
  <main>
    <div className="text-yellow-700 text-5xl" ><Parent/></div>
    <div></div>
  </main>
  )
}
