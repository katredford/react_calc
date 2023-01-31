
import './App.css';
import React, {useState, useReducer} from "react"

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      return state
  }
  
}

export function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [count, setCount] = useState(0)

  function increment() {
    // setCount( prevCount => prevCount + 1)
    dispatch({ type: "increment"})
  }

  function decrement() {
    // setCount(prevCount => prevCount - 1)
    dispatch({type: "decrement"})
  }
  return (
    <div >
      <button onClick={decrement}> - </button>
      <span>{state.count}</span>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default App;
