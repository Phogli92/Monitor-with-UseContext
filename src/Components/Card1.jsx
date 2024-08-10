import React, { useContext } from 'react'
import { InputContext } from '../InputContext'
import Card2 from './Card2'
function Card1() {
    const [inputText, setInputText] = useContext(InputContext)
  return (
    <div style={{border: '2px solid red', width:'500px', height:'300px', padding:'20px',display:'flex', alignItems:'center', flexDirection:'column', gap:'20px'}}>
    <input type="text" placeholder='Card1' onChange={(e)=>setInputText(e.target.value)}/>
    <Card2/>
    </div>
  )
}

export default Card1