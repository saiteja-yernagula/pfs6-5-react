import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  let [count,setCount]=useState(0)
  let [val,setVal]=useState(0)
  // useEffect(()=>{
  //   console.log('api running')
  // })
//   useEffect(()=>{
//    console.log('api logic')
// },[])
useEffect(()=>{
   console.log('api logic')
},[val])

  return (
    <div>
      <button onClick={()=>setVal(val+1)}>inc val</button>
      {count}
      <button onClick={()=>{
        setCount(count+1)
        console.log(count)
      }}>inc</button>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
        <Doctorcard name='john' age='25' specialization='Ortho Specialist' gender='male'/>
        <Doctorcard name='jessy' age='23' specialization='Cardio Specialist' gender='female'/>
        <Doctorcard name='jack' age='27' specialization='Hearts Specialist' gender='male'/>
        <Doctorcard name='jane' age='35' specialization='Bones Specialist' gender='male'/>
        <Doctorcard name='jesica' age='45' specialization='Gynocologist Specialist' gender='female'/>
        <Doctorcard name='josh' age='35' specialization='Neuro Specialist' gender='male'/>
      
      </div>
      <Addnewdoctor/>
    </div>
  )
}

export default App