import React from 'react';        //default export
import { useState } from 'react';          //named export

const Hook = () => {
    const[name,setName] = useState("Pavani")
    const[user,setUser] = useState({name:"Ramana",age:20})

    // return a state variable and a function using which can update the state value,
    // because we do not have setState function in functional component.Also it will take the 
    // default value of the state variable.
    
    const updateState = () => {
        setName("mamatha")
    }
    
    const updateObjState = () => {
        setUser((prevState)=>({
            ...prevState,
            age:25
        }))
    }

  return (
    <div>
        <h1>Introduction to Hooks</h1>
        <h1>State variable name : {name}</h1>
        <button onClick={updateState}>Click to update the state variable</button>
        <br/>
        <button onClick={()=>setName("Jyothi")}>Click to update the state variable using arrow function</button>
        <p>State object name: {user.name}</p>
        <p>State object age:{user.age}</p>
        <button onClick={updateObjState}>Click to update the state variable object by using prev state</button>
    </div>
  )
}

export default Hook;


// Hooks is a part of react library 