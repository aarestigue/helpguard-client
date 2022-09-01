import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import editIcon from '../../images/edit.svg'
import deleteIcon from '../../images/trash.svg'
import addIcon from '../../images/add.png'
import CreateUser from '../CreateUser/CreateUser';
import EditUser from '../EditUser/EditUser';

function DbUsers() {

    const [users, setUsers] = useState([])

    // To open Details modal
  const [openModal, setOpenModal] = useState(false)


  // To close Edit Modal

  const [editModalInfo, setEditModalInfo] = useState(null);

  const [closeEditModal, setCloseEditModal] = useState(true)

  //to toggle Create User Modal

  const [openCreateUser, setOpenCreateUser] = useState(false)

  //To send User id when clicking on the radio button

  const [radio, setRadio] = useState('')
  const handleRadio= (e) => setRadio(e.target.value);


    const getUsers = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          setUsers(response.data.reverse());
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getUsers();
      }, []);

  return (
    <div>

        {/* HERE STARTS THE OPTIONS/MODALS MENU*/}

        <ul class="menu menu-horizontal bg-base-100 rounded-box" >
  
  
        <li onClick={()=> setCloseEditModal(false)}>

        <a >
        <img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor">
        </img>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <label for="my-modal-6" >Edit</label>   
        </a>
        
        </li>

        <li onClick={()=> setOpenCreateUser(true)}>
        <a >
        <img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor">
        </img>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <label for="my-modal-6" >Create
        </label>   
        </a>
        </li>

        </ul>

        {/* TABLE GOES HERE */}

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
   
                
                <thead>

                <tr>
                    <th>
                    {/* <label>
                    <input type="checkbox" class="checkbox" />
                    </label> */}
                    </th>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Category</th>
                    <th>Create Date</th>
                </tr>

                </thead>
    
                <tbody>

                {/* ROW 1 */}

                {users && users.map((user)=> {
                    
                    {if (!user.hgEmployee){
                        return(
                            <tr key={user._id}>
    
                    <th>
    
                    <label>
                    <input value={user._id} type="radio" className="radio" onClick={() => setEditModalInfo(user)}/>
                    </label>
                    </th>
    
                    <td>
    
                    <div className="flex items-center space-x-3">
    
                    {/* profile pic */}
                    {/* <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div> */}
    
                    
                    <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">Client</div>
                    </div>
    
                    </div>
                    </td>
    
                    <td>
                    {/* {`${user.owner.name}
                    ${user.owner.lastName}`} */}
                    {user.owner}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Agent</span>
                    </td>
    
                    <td></td>
                    <th>
                    <button className="btn btn-ghost btn-xs">{user.createdAt}</button>
                    </th>
    
                    </tr>
                    
                        )

                    }}
                    
                })}

                


      
    </tbody>
    {/* FOOT */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>

<>

{ editModalInfo && !closeEditModal &&
<EditUser user={editModalInfo} update={getUsers} onClose={()=> setCloseEditModal(true)}/>
}
</>

<>
{ openCreateUser &&
<CreateUser open={openCreateUser} update={getUsers} onClose={()=> setOpenCreateUser(false)}/>
}
</>
    </div>
  )
}

export default DbUsers