import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Admin from './Admin'
import Login from './Login'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'element={<Login/>} />
        <Route path='/add-product' element={<Admin/>}  />
      </Routes>
    </div>
  )
}

export default MainRoute