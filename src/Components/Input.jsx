import React, { useContext } from 'react'
import { InputContext } from '../InputContext'

function Input() {
    const [inputText] = useContext(InputContext)
  return (
    <div style={{border: '2px solid blue', width:'300px', height:'80px', padding:'20px',display:'flex', alignItems:'center', flexDirection:'column', gap:'20px'}}>
    <h2>{inputText}</h2>
    </div>
  )
}

export default Input