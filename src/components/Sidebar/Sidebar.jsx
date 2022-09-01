import React from 'react'
import './Sidebar.css'
import logo from '../../images/logo.svg'
import { SidebarOptions } from '../../Data/Data'
import { UilSignout } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Sidebar() {

 const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
    
    {/* LOGO GOES HERE */}
        
        <div className="logo">
            <img src={logo} alt="" />
            <span></span>
        </div>
    {/* MENU GOES HERE */}
        <div className="menu">

            {SidebarOptions.map((item, index)=> {
                return (
                <Link  className={selected === index ? "menu-items active" : "menu-items" }
                key={index}
                onClick={()=> setSelected(index)}
                to={item.path}
                >
                    <div>
                    <item.icon/>
                    </div>
                <span>
                    {item.heading}
                </span>
                </Link>
                )
            })}

            <div className="menu-items">
                <UilSignout/>
                <span>
                    Logout
                </span>
            </div>

            

        </div>
    </div>
  )
}

export default Sidebar