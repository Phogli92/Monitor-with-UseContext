import React, { useContext } from 'react'
import Input from './Input'
import { InputContext } from '../InputContext'
function Card2() {
    const [inputText, setInputText] = useContext(InputContext)
  return (
    <div style={{border: '2px solid yellow',width:'400px', height:'200px', padding:'20px',display:'flex', alignItems:'center', flexDirection:'column', gap:'20px'}}>
    <input type="text" placeholder='Card2' onChange={(e)=>setInputText(e.target.value)}/>
    <Input/>
    </div>
  )
}

export default Card2