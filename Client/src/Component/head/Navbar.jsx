import React from 'react'
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <>
   <div className="container 

text-secondary">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="icon d-flex align-items-center col-md-3 mb-2 mb-md-0 4fw-bolder  text-decoration-none">
      Product Factory
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
        <li><Link to='/' className="nav-Link px-2 Link-secondary text-decoration-none text-dark">Home</Link></li>
        <li><Link to='product' className="nav-Link px-2 Link-dark text-decoration-none text-dark">Product</Link></li>
        <li><Link to='cart' className="nav-Link px-2 Link-dark text-decoration-none text-dark">Cart</Link></li>
        <li><Link to='contact' className="nav-Link px-2 Link-dark text-decoration-none text-dark">Contact</Link></li>
        <li><Link to='about' className="nav-Link px-2 Link-dark text-decoration-none text-dark">About</Link></li>
      </ul> 
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-dark me-2  text-dark">Login</button>
        <button type="button" className="btn btn-dark"><Link to='signin' className="nav-Link px-2 Link-dark  text-light">Sign-up</Link></button>
      </div>
    </header>
  </div>

    </>
  )
}

export default Navbar