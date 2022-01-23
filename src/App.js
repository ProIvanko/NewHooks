//

import React, {useState} from "react";

function App() {

  const [colored, setColored] = useState(false)

  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'blue' : 'black'
  }

  return (
    <>
      <h1 style={styles} >Quantity:</h1>

      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)} >Add</button>

      <button className="btn btn-success" onClick={() => setCount(prev => prev - 1)} >Remove</button>

    </>
  )
}

export default App
