import React from 'react'
import {NavLink,Outlet} from 'react-router-dom';
import home from "../../assets/domicile.png"


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-primary mb-3">
        <NavLink to="/" > <img className='home' src={home} width={50} alt="home"/> </NavLink>
    </nav>
    <Outlet/>
    </>

  )
}

export default Navbar