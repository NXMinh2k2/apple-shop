import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../buttons/Cart'
import Login from '../buttons/Login'
import Signup from '../buttons/Signup'
// import Cart from '../buttons/Cart'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid py-2">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/products">Product</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/contact">Contact</Link>
              </li>
            </ul>
            <Link class="navbar-brand mx-auto my-auto fw-bold " to="/">Apple Mart</Link>
            <Login />
            <Signup />
            <Cart />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header