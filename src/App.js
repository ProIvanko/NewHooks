//

import React, {useState, useEffect, useRef} from "react";

function App() {
  const [number, setNumber] = useState(42)
  return (
    <>
    <div>
      <h1>Computing property: {number} </h1>
      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)} >Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)} >Remove</button>
    </div>
    </>
  )
}

export default App
