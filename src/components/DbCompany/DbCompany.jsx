import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DbCompany() {

  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/companies`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      setCompanies(response.data.reverse());
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanies();
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

                {companies && companies.map((company)=> {
                    return(
                        <tr key={company._id}>

                <th>

                <label>
                <input type="radio" className="radio" />
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
                <div className="font-bold">{company.name}</div>
                <div className="text-sm opacity-50">United States</div>
                </div>

                </div>
                </td>

                <td>
                {`${company.owner.name}
                ${company.owner.lastName}`}
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>

                <td>{company.category}</td>
                <th>
                <button className="btn btn-ghost btn-xs">{company.createdAt}</button>
                </th>

                </tr>
                    )
                })}

                


      
    </tbody>
    {/* FOOT */}
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
  )
}

export default DbCompany