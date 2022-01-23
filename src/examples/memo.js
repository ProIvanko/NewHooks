//Хуки следят за объектами, однако при перерисовке (render) объекты перерисывываются и изменяются. Хуки воспринимают это как изменение объекта и активируются.
//Чтобы кэшировать объекты (запоминать объекты из прдыдущего рендера для предотвращения их перерисовки и срабатывания хуков), используется хук useMemo с указанием зависимости - при каком условии должна срабатывать функция

import React, {useState, useMemo} from "react";
import { useEffect } from "react/cjs/react.development";

function complexCompute(num) {
  console.log('Computing...')
  let i = 0
  while (i<1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)

  const [colored, setColored] = useState(false)

  const styles = useMemo (() => ({
    color: colored ? 'blue' : 'black'
  }), [colored]) 
  
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]) 

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <>
    <div>
      <h1 style={styles} >Computing property: {computed} </h1>

      <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)} >Add</button>

      <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)} >Remove</button>

      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)} >Change</button>

    </div>
    </>
  )
}

export default App
