import React, { useState } from "react";
import { NavLink} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.png'


import './nav.css';

export const Navbar = () => {

  const [isActive, setActive] = useState(false);

  return (
    <header className='header'>

      <div className='logo'>
        <a href= '/'>
          <img src={logo} alt=''/>
        </a>
      </div>

      <div className='navigation'>

        {/* <input type="checkbox" className="toggle-menu" />
        <div className='hamburger'></div> */}
        <div onClick={() => setActive(!isActive)} className='menu-toggle'>
          {!isActive ? <i className="fa fa-bars" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}
        </div>
        <ul  className={` menu ${isActive ? "active" : " "}`} onClick={ () => setActive(!isActive)}>
          <li><NavLink  exact activeClassName="active-link" to='/'>Home</NavLink></li>
          <li><NavLink activeClassName="active-link"  to='/about'>About us</NavLink></li>
          <li><NavLink activeClassName="active-link"  to='/services'>Services</NavLink></li>
          <li><NavLink activeClassName="active-link"  to='/potfolio'>Potfolio</NavLink></li>
          <li><NavLink activeClassName="active-link"  to='/disscus'>Let's Talk</NavLink></li>
        </ul>
      </div>
    </header>
  )
}
