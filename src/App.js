
import './App.css';
import React, {useState, useReducer} from "react"

export function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount( prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div >
      <button onClick={decrement}> - </button>
      <span>{count}</span>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default App;
