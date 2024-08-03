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
// only give function signature in react

// a website whose html is not changing as times go by is a static website 
// for dynamic website we use react, so it is easier to do dom manipulation 
// jQuery -- make easy to do dom manipulation 
// react<facebook> and vueJS are better 


// react worry about 3 things  --- components , state , re-rendering 
// state represents the dyanmic things on your app, things that get change   

// react generally converts into html, javascript and css


// 