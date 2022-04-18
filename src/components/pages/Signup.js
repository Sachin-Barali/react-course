import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'


const Signup = () => {
  return (
    <>
    <Navbar/>
      <main class="form-signin w-50 mx-auto my-5 shadow-lg p-5">
  <form>
    <img class="mb-4" src="logo.jfif" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    Do you want to sign in <Link to='./signup'>Register</Link>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
      <Footer/>
     </>
  )
}

export default Signup
