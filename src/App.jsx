import {InputContext} from './InputContext'
import './App.css'
import Card1 from './Components/Card1'
import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('Write to inputs')
return(
  <>
  <InputContext.Provider value={[inputText, setInputText]}>
  <Card1/>
  </InputContext.Provider>
  </>
)  
}

export default App
