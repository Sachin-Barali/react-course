import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Blog from './components/pages/Blog'
import Cart from './components/pages/Cart'
import Home from './components/pages/Home'
import Homepage from './components/pages/Homepage'
import Productspage from './components/pages/Productspage'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'


const MyRouter = () => {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/signin' element={<Signin/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/cart' element={<Cart/>}/>
           
           {/* material pages */}

           <Route path='/home' element={<Homepage/>}/>
           <Route path='/product' element={<Productspage/>}/>
           <Route path='/Blogs' element={<Blog/>}/>
        </Routes>
    </Router>
  )
}

export default MyRouter
