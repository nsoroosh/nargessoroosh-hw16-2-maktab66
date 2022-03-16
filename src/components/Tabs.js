// import React from 'react'

import React, { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import { Tab } from 'react-bootstrap';
import "./Tab.css"

export default function Tabs() {
    const [currenttab, setcurrenttab] = useState( { 
        title: "signup",
          
        });
    const tabs = [
        { title: "signup" },
        { title: "signin" }
     ];
    const choosen=(item)=>{
         setcurrenttab(item)
     }
  return (
    <>
    <div className='container'>
        <div className='tabcontainer'>
        {tabs.map((item)=>{
           return <div className='tab' onClick={()=>choosen(item)}>{item.title}</div>
        })}
        </div>
        <span>{currenttab.title==='signup'?<Signup/>:<Signin/>}</span>
    </div>
    </>
  )
}
