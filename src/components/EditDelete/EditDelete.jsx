import React from 'react'
import editIcon from '../../images/edit.svg'
import deleteIcon from '../../images/trash.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { UserMenu } from 'react-admin';




function EditDelete({company, update, onClose}) {

  
   const [name, setName] = useState(company.name);
   const [owner, setOwner] = useState(company.owner);
   const [users, setUsers] = useState(company.users);
   const [category, setCategory] = useState(company.category);

   const [allAgents, setAllAgents] = useState([]);
   const [allUsers, setAllUsers] = useState([]);
  
    const {id} = useParams();
    const navigate = useNavigate();

    /* console.log(company) */
    

   const getAllUsers = async () => {
      try {

        const storedToken = localStorage.getItem('authToken');
  
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/all-users`, 
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          }
        }
        )
      
     /* let usersArr = [];
      let usersArray = response.data.allUsersmap((user)=> usersArr.push(`${user.name} ${user.lastName}`)) */
      
     console.log(response.data[0].name)
      setAllUsers(response.data);
  }
      catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsers();
    
  }, []);

    const getAgents = async () => {
      try {
        const storedToken = localStorage.getItem('authToken');
  
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setAllAgents(response.data.reverse());
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAgents();
    }, []);


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
      const handleOwner = (e) => setOwner(e.target.value);
      const handleUsers = (e) => setUsers(e.target.value);
      const handleCategory = (e) => setCategory(e.target.value);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const body = { name, owner, users, category};
        const storedToken = localStorage.getItem('authToken');
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/companies/${company._id}`, body, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          }
        })
        .then(() => {
            setName('');
            setOwner('');
            setUsers('');
            setCategory('');
            update()
            onClose()
          })
          .catch((err) => console.log(err));
      };
    
      const deleteCompany = () => {
        const storedToken = localStorage.getItem('authToken');
        axios
          .delete(`${process.env.REACT_APP_API_URL}/api/companies/${company._id}`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            }
            })
          .then(() => {
            update();
            onClose();
          })
          .catch((err) => console.log(err));
      };


  
  
  return (
<>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
      <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">Edit</h3>

        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Company name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" value={name} onChange={handleName}  placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>

     

     <div className="form-control">
            <label htmlFor="owner" className="label">
                <span className="label-text">Owner</span>
            </label>
            <label className="input-group">
            <select value={company.owner} onChange={handleOwner} className="select select-bordered select-sm w-full max-w-xs">
              <option disabled selected>Select</option>
              {allAgents &&  allAgents.map((agent) => {
              if(agent.hgEmployee) {
              return (
               <option key={agent._id}>{`${agent.name} ${agent.lastName}`}</option>
                )
              }
    
             })}
             </select>
                
            </label>
     </div>

     <label htmlFor="users" className="label">
        <span className="label-text">Users</span>
      </label>   
        <select style={{width: "100%"}} name="" id="" multiple >

      {allUsers && (
        allUsers.map((el) => {
          return (
            <option value={el._id} >{el.name}</option>
          )
        })
        /* <Multiselect options={allUsers.map((user)=> {return (
          [
            {
              label: `${user.name}`,
              value: `${user.name}`
            }
          ]
        )})} placeholder="Select an option" className='mutliselect'/> */
        )}
        </select>


     
     
    
     <div className="form-control">
            <label className="label">
                <span className="label-text">Category</span>
            </label>
            
            <label className="input-group">
              <input type="text" name="category" value={company.category} onChange={handleCategory}  placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>


     
        <div class="modal-action">
          <button type='submit' for="my-modal-6" >Save</button>
          <button onClick={deleteCompany}>Delete</button>
         
        </div>

        </form>
      </div>
    </div>

{/* { $(document).ready(function() {
      $('.js-example-basic-multiple').select2()
  })} */}
</>

  )
}

export default EditDelete