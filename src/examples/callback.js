//useCallback в отличие от useMemo возвращает не ЗНАЧЕНИЕ функции, а саму функцию (либо предотвращает рендер)

import React from "react";


function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'blue' : 'black'
  }

  const generateItemsFromAPI = useCallback ((index) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + index}`)
  }, [count])

  return (
    <>
      <h1 style={styles} >Quantity: {count} </h1>

      <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)} >Add</button>

      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)} >Change color</button>

      <ItemsList getItems =  {generateItemsFromAPI}/>

    </>
  )
}

export default App
