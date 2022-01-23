// UseEffect запускает код при изменении зависимого элемента и вызывает перерисовку (render) приложения

import React, {useState, useEffect} from "react";

function App() {
  const [type, setType] = useState('users')

  const [data, setData] = useState([])

  const [pos, setPos] = useState({
    x:0, y:0
  })

  // console.log('CRender')

  // useEffect (() => {
  //   console.log('render')
  // })


// Нужно вызывать выражение в {} только если меняется state type (список зависимостей)
  useEffect (() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    
  .then(response => response.json())
  .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPos ({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDipMount')

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Source: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button  onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>

  )
}

export default App
