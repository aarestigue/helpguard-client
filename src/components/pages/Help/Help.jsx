import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { UserMenu } from 'react-admin';
import Sidebar from '../../Sidebar/Sidebar';
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react';

function Help() {

const { user, logout }  = useContext(AuthContext); 




  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sender, setSender] = useState('');
  const [statusColumn, setStatusColumn] = useState('');

  const handleSubject= (e) => setSubject(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleSender = (e) => setSender(e.target.value);
  const handleStatusColumn = (e) => setStatusColumn(e.target.value);
  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { subject, description, category, statusColumn : "6311f7de99920a174003756b"};

    
    const storedToken = localStorage.getItem('authToken');

    try{
    
    let response = await axios
    .post(`${process.env.REACT_APP_API_URL}/api/tickets`, body, {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    }
  })

 
  setSubject('');
  setDescription('');
  setCategory('');
  setSender('');
  navigate('/help-success');

 /*  update(); */


  console.log(response)



    } catch (error) {
    console.log(error);
  }

  };
      

  return (
    <>
    <div className='admin-body'>
        <div className='admin-glass'>
        <Sidebar/>
        
    
        <div className="hero-content flex-col lg:flex-row-reverse"> 
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Get a Helpguard to contact you</h1>
            <p className="py-6">We'll send help in less than 15 minutes. Promise.</p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">

        <form onSubmit={handleSubmit}>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
         <input type="text" name='subject' placeholder="Subject" onChange={handleSubject} className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name='description' className="textarea textarea-bordered" onChange={handleDescription} placeholder="What can we do for you?"></textarea>
          
        </div>


        <label className="label">
            <span className="label-text">Category</span>
        </label>
        <select name='category' onChange={handleCategory} class="select select-bordered w-full max-w-xs">
        <option disabled selected>Choose an option</option>
        <option>Technical issue</option>
        <option>How to</option>
        <option>Sales question</option>
        </select>
        
        {user && <input type="text" value={user._id} onChange={handleSender} hidden/>}

        <input type="text" name='statusColumn' value="6311f7de99920a174003756b" onChange={handleStatusColumn} hidden/>
        
        

        <div className="form-control mt-6">
          <button type='submit' className="btn-cta">Send</button>
        </div>

        </form>    
      </div>
    </div>
  </div> 

       
  </div>
         </div>
    
    </>
  )
}

export default Help