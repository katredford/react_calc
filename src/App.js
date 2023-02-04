
import './App.css';
import React, { useState, useReducer } from "react"
import "./style.css"

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
}

function reducer(todos, action) {
  
  }
  



export function App() {
  const [todos, dispatch] = useReducer(reducer, [])
   const [name, setName] = useState('')

  
 

  return (
    <>
         <div className="output">
        <div className="previous-operand">
          
        </div>
        <div className="current-operand"></div>
      </div>
      <button
        className="span-two"
        
      >
        AC
      </button>
      <div> </div>
      <button>DEL</button>
      <button>/</button>
      <button>*</button>
      <button>+</button>
      <button>-</button>
      <button>.</button>
      <button>=</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
    </>
  );
}

export default App;
