import React from 'react'
import '../AdminPanel/AdminPanel.css'
import Sidebar from '../../Sidebar/Sidebar'

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react';

function Profile() {

  
  const { user, logout }  = useContext(AuthContext); 
  
  /* const navigate = Navigate() */
  const [profile, setProfile] = useState(null);

  const navigate = useNavigate();


  const storedToken = localStorage.getItem("authToken");
/* 
  const deleteProfile = () => {
      axios.delete(`${process.env.REACT_APP_API_URL}/profile/${user._id}`)
      .then(() => {
        logout();
        navigate("/signup")
      })
      .catch((err) => console.log(err));
  }
 */
  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  getProfile();
}, [user]);

  return (

    
   
    <div>
        <div /* className='admin-glass' */>
        {/* <Sidebar/> */}
        {profile && 
        <>
        <h2>Hello {profile.name}</h2> 
        <form>
        <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' value={profile.name}  /* onChange={handleSubject} */ className="input input-bordered" />
        </div>

        <div>
            <label className="label">
              <span className="label-text">Last name</span>
            </label>
            <input type="text" name='lastName' value={profile.lastName}  /* onChange={handleSubject} */ className="input input-bordered" />
        </div>

        <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' value={profile.email}  /* onChange={handleSubject} */ className="input input-bordered" />
        </div>

        <button>Save</button>
        </form>
        </>
        }
        
        
        
        
        
        
        </div>
    </div>
  )
}

export default Profile