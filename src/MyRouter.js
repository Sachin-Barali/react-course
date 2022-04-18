import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'

const MyRouter = () => {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/signin' element={<Signin/>}/>
           <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </Router>
  )
}

export default MyRouter
