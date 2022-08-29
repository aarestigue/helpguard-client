import React from 'react'
import editIcon from '../../images/edit.svg'
import deleteIcon from '../../images/trash.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



function EditDelete({company}) {
   const [name, setName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [owner, setOwner] = useState('');
  
    const { id } = useParams();
    const navigate = useNavigate();

    /* const getCompany = async () => {
        try {
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/companies/${props.company._id}`);
    
          setName(response.data.name);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setOwner(response.data.owner);

        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getCompany();
      }, []); */
    
      const handleName= (e) => setName(e.target.value);
      const handleLastName = (e) => setLastName(e.target.value);
      const handleEmail = (e) => setEmail(e.target.value);
      const handleOwner = (e) => setOwner(e.target.value);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const body = { name, lastName, email, owner };
    
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/companies/${id}`, body)
          .then(() => {
            setName('');
            setLastName('');
            setEmail('');
            setOwner('');
            navigate(`/database`);
          })
          .catch((err) => console.log(err));
      };
    
      const deleteCompany = () => {
        axios
          .delete(`${process.env.REACT_APP_API_URL}/api/companies/${id}`)
          .then(() => {
            navigate('/database');
          })
          .catch((err) => console.log(err));
      };
  
  return (
<>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Edit</h3>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="email" value={company.email} onChange={handleEmail}  placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>

     

     <div className="form-control">
            <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" value={company.name} onChange={handleName}  placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>

     <div className="form-control">
            <label htmlFor="lastName" className="label">
                <span className="label-text">Last name</span>
            </label>
            <label className="input-group">
                <input type="text" name="lastName" value={company.lastName} onChange={handleLastName}  placeholder="Enter your last name" className="input input-bordered w-full max-w-xs" />
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