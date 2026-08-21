import { useState } from 'react'
import Login from "./pages/login"
import Signup from "./pages/signup"
import Home from "./pages/dashboard/home"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App