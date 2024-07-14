import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10000)

  return (
    <div>
      
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
    </div>
  )
}

export default App

// state variable -- consicous watch if it going to change then dom will change
// state variable -- useState