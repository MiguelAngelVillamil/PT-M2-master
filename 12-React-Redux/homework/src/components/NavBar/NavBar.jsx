import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">

        <div className="navbar-brand">
          <img id="logoHenry" src={Logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top"/>
        </div>

        <li className="list-item">
            <NavLink className="navbar-brand mb-0 h1" exact to="/" >Home</NavLink>
            <NavLink className="navbar-brand mb-0 h1" to="/favs" >Favoritas</NavLink>
        </li>

      </div>
    </nav>  
  )
}