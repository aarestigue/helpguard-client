import deleteIcon from '../../images/trash.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { UserMenu } from 'react-admin';

function AddCompany({company, update, onClose, open}) {

 

   const [name, setName] = useState('');
   const [owner, setOwner] = useState('');
   const [users, setUsers] = useState([]);
   const [category, setCategory] = useState('');

   const [allAgents, setAllAgents] = useState([]);
   const [allUsers, setAllUsers] = useState([]);


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
    let usersArray = response.data.allUsersmap((user)=> usersArr.push(`${user.name} ${user.lastName}`))*/
    
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


      const handleName= (e) => setName(e.target.value);
      const handleOwner = (e) => setOwner(e.target.value);
      const handleUsers = (e) => setUsers(e.target.value);
      const handleCategory = (e) => setCategory(e.target.value);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const body = { name, owner, users, category};
        const storedToken = localStorage.getItem('authToken');
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/companies`, body, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          }
        })
        .then((company) => {
            setName('');
            setOwner('');
            setUsers('');
            setCategory('');
            update()
            onClose()
          })
          .catch((err) => console.log(err));
      };
    
      
  return (
  
      <>

    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">Create a company</h3>


        <form onSubmit={handleSubmit}>

        <div className="form-control">
            <label className="label">
            <span className="label-text">Company name</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="name" onChange={handleName}  placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
            </label>
        </div>

     

     <div className="form-control">
            <label htmlFor="owner" className="label">
                <span className="label-text">Owner</span>
            </label>
            <label className="input-group">
            <select onChange={handleOwner} className="select select-bordered select-sm w-full max-w-xs">
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
        {/* <select style={{width: "100%"}} name="" id="" multiple onChange={handleUsers}>

      {allUsers && (
        allUsers.map((el) => {
          return (
            <option value={el._id} >{el.name}</option>
          )
        })
       

        )}
        </select> */}

        <Multiselect options={allUsers.map((user)=> {return (
          
            {
              key: `${user.name}`,
              name: `${user.name} ${user.lastName}`,
              id: `${user.name}`
            }
        )})} placeholder="Select an option" className='mutliselect'
        displayValue="name" /> 

        <div className="form-control">
            <label htmlFor="owner" className="label">
                <span className="label-text">Category</span>
            </label>
            <label className="input-group">
            <select name="category" onChange={handleCategory} className="select select-bordered select-sm w-full max-w-xs">
              <option disabled selected>Select</option>
              <option value={"free user"}>Free user</option>
              <option value={"paid"}>Paid</option>
              <option value={"trial"}>Trial</option>
               
             </select>
          </label>
     </div>
     
    


     
        <div class="modal-action">
          <button type='submit' for="my-modal-6" >Create</button>
        
         
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


export default AddCompany