import React from 'react'
import './Sidebar.css'
import logo from '../../images/logo.png'
import { SidebarOptions } from '../../Data/Data'
import { UilSignout, UilBars } from '@iconscout/react-unicons'
import {motion, AnimateSharedLayout, LayoutGroup} from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';

function Sidebar() {

 const [selected, setSelected] = useState(0);
 const [expanded, setExpanded] = useState(true);
 const { loggedIn, user, logout } = useContext(AuthContext);

 const sidebarVariants = {
    true:{
        left: '0'
    },

    false:{
       left: '-60%'
    }
 }

  return (
    <>
    <div className='bars' style={expanded? {left:'5%'} : {left:'5%'}}
    onClick={()=> setExpanded(!expanded)}
    >
        <UilBars/>
    </div>

    <motion.div className="sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth <= 768?`${expanded}`: ""}
    >
    
    
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

            <div className="menu-items" onClick={logout}>
                <UilSignout/>
                <span>
                    Logout
                </span>
            </div>

            

        </div>
    </motion.div>
    </>
  )
}

export default Sidebar