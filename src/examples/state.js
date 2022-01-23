// useState изменяет свойство объекта. useState является кортежем из двух элементов - названия объекта, к которому применен, и состояние объекта. При изменении состояния производится перерисовка (render) приложения 

import React, {useState} from "react";

function computInitialCounter() {
  console.log('SomeCalculations')
  return Math.trunc(Math.random() *20)
}

function App() {
  // const [counter, setCounter] = useState(0)
  const [counter, setCounter] = useState(() => {
    return computInitialCounter()
  })
  
  const [state, setState] = useState({
    title:'Counter',
    date: Date.now()
  })


  function increment() {
    setCounter (prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title:'New name'
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Remove</button>
      <button onClick={updateTitle} className="btn btn-default">New name for the title</button>

      <pre>
        {JSON.stringify(state,null, 2)}
      </pre>
    </div>
  )
}

export default App
