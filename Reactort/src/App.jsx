import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function name should always start with capital letter 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
        
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}

          {/* use curly braces to write js in return of jsx  */}
        {/* </button> */}  

        <CustomButton count={count} setCount={setCount} />
        <CustomButton count={count * 100} setCount={setCount} />


        
        
    </div>
  )


}

function CustomButton (props){
  function onClickHandler(){
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={onClickHandler}>
      count is {props.count}
    </button>
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


// linkedin is owned by microsoft 

//  website can be divied in states and components 

// react is a library that is used to build user interfaces

// dom - document object model


// in react as developer we have to write short , but in html form its too large code 


// alert() -- to show alert
// .appencChild() -- to add element in dom
// .removeChild() -- to remove element from dom
// .innerHTML -- to change inner html
// .innerText -- to change text
// .style -- to change style
// document.createElement() -- to create element
// document.getElementById() -- to get


// instagram is written in react 
// create a react app -- npm create vite@latest 
// then npm i 
// then npm run dev

// if you want to check how react code in converted into html and js -- use command  -- npm run build 

// jsx -- a js file, inside which we can write both js and xml    