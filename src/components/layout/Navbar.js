import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="row">
          <div className="col-md-3">
          <Link className="navbar-brand" to="#">Navbar</Link>
          </div>
          <div className="col-md-6">
          <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
          <div className="col-md-3">
            icons
          </div>
        </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
