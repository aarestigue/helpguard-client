import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';
import '../pages/HomePage/HomePage.css'
import Logo from '../../images/Help Guard.svg'
import './Layout.css'

function Header() {

    const { loggedIn, user, logout } = useContext(AuthContext);

  return (

  <>
        
  {loggedIn && (
    <div>

      
        <div class="navbar shadow-md bg-base-100">
  
 
        <div class="flex-none">
    <div className='navbar-login'>
   

    <Link className='app-navbar-menu' to="/admin">App</Link>
    
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        {/* <li><a>Settings</a></li> */}
        <li><a onClick={logout}>Logout</a></li>
      </ul>

    </div>
    </div>
    </div>
    </div>
        </div>
     )}

     {logout && !loggedIn && (
        <>
        <div class="navbar bg-base-100">
  
 
      <div class="flex-none">
      <div className='navbar-login'>
        <div class="flex-1">
         <Link to="/" ><img className="main-logo" src={Logo} alt="" /></Link>
        </div>

        
        <div className="navbar-end">
        <Link to="/login">Login</Link>
        <Link to="/false/signup"> <button className="btn-cta">Start now</button></Link>
      </div>

      </div>
      </div>
      </div>
      
      </>
     )}


</>  
  )
}

export default Header