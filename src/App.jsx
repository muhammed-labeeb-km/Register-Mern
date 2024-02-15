import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Register from './pages/Register'
import View from './pages/View'
import Header from './components/Header'
function App() {
 

  return (
    <div  >
    <Header></Header>
     <Routes>
     <Route path='/' element={<Register></Register>} ></Route>
     <Route path='/view' element={<View></View>} ></Route>
     </Routes>
    </div>
  )
}

export default App
