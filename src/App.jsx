import React, { useContext } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptionSignup from "./pages/CaptainSignup"
import CaptionLogin from "./pages/CaptainLogin"
import { userDataContext } from './context/userContext'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<UserLogin/>}/>
    <Route path='/signup' element={<UserSignup/>}/>
    <Route path='/captain-login' element={<CaptionLogin/>}/>
    <Route path='/captain-signup' element={<CaptionSignup/>}/>
   </Routes>
  )
}

export default App