import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Room from './components/Room'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/room/:id' element={<Room></Room>}></Route>
    </Routes>
  )
}

export default App