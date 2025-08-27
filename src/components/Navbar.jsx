import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <ul className='Navbar'>
        <li>
            <NavLink to="/" className={({isActive}) => (isActive ? "active-link" : "")}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/Superheroes-Male" className={({isActive}) => (isActive ? "active-link" : "")}>
                Male Superheroes
            </NavLink>
        </li>
        <li>
            <NavLink to="/Superheroes-Female" className={({isActive}) => (isActive ? "active-link" : "")}>
                Female Superheroes
            </NavLink>
        </li>
    </ul>
    </div>
  )
}

export default Navbar