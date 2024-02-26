import React, { useState } from 'react'
import Home from '.'
import CreateUser from './CreateUser'
import HomePage from './HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    {/* <CreateUser/> */}
    <HomePage/>
    </>
  )
}

export default App
