import React from 'react'
import editIcon from '../../images/edit.svg'
import deleteIcon from '../../images/trash.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



function EditDelete() {

   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [owner, setOwner] = useState('');
  
    const { id } = useParams();
    const navigate = useNavigate();

  
  return (
<>
    <ul class="menu menu-horizontal bg-base-100 rounded-box">
  <li>

    <a>
      <img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor"></img>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      <label for="my-modal-6" className='modal-btn'>Edit</label>    
    </a>
  </li>
  <li>
    <a>
      <img src={deleteIcon} class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </a>
  </li>
  
</ul>
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Edit</h3>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="email" value={email} onChange={handleEmail} placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>

     

     <div className="form-control">
            <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" value={name} onChange={handleName} placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>

     <div className="form-control">
            <label htmlFor="lastName" className="label">
                <span className="label-text">Last name</span>
            </label>
            <label className="input-group">
                <input type="text" name="lastName" value={lastName} onChange={handleLastName} placeholder="Enter your last name" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>
        <div class="modal-action">
          <label for="my-modal-6" class="btn">Yay!</label>
        </div>
      </div>
    </div>



</>
  )
}

export default EditDelete