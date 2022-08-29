import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function DbUsers() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
          /* const storedToken = localStorage.getItem('authToken'); */
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`, {
            /* headers: {
              Authorization: `Bearer ${storedToken}`,
            }, */
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
        {/* TABLE GOES HERE */}

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
   
                
                <thead>

                <tr>
                    <th>
                    <label>
                    <input type="checkbox" class="checkbox" />
                    </label>
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
                    <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
    
                    <td>
    
                    <div className="flex items-center space-x-3">
    
                    {/* profile pic */}
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
    
                    
                    <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
    
                    </div>
                    </td>
    
                    <td>
                   {/*  {`${user.owner.name}
                    ${user.owner.lastName}`} */}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
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

    </div>
  )
}

export default DbUsers