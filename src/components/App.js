import React from 'react' 
import { useState } from 'react' 
const App = () => { 
  const [message, setMessage] = useState("")    
  const handleClick = () => { setMessage("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.") }    
  return (<div>       <button onClick={handleClick}>click me</button>       {message && <p>{message}</p>}     </div>) } 
  export default App