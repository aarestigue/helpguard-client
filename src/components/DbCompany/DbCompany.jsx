import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import editIcon from '../../images/edit.svg'
import deleteIcon from '../../images/trash.svg'
import EditDelete from '../EditDelete/EditDelete';

function DbCompany() {

  const [companies, setCompanies] = useState([]);
  const [modalInfo, setModalInfo] = useState(null);

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


  const [radio, setRadio] = useState('')
  const handleRadio= (e) => setRadio(e.target.value);

  

  return (
    <div>
         <ul class="menu menu-horizontal bg-base-100 rounded-box">
  
  
  <li>
<a >
<img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor"></img>
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
<label for="my-modal-6" className='modal-btn'>

  Edit

  </label>   

</a>

</li>

<li>
<a>
<img src={deleteIcon} class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</a>
</li>

</ul>
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
                <input type="radio" className="radio" value={company._id} onClick={() => setModalInfo(company)}  />
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
                <div className="font-bold">{company.name}</div>
                <div className="text-sm opacity-50">
                
                </div>
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
<>
{modalInfo && 
<EditDelete company={modalInfo} />
}
</>
    </div>
  )
}

export default DbCompany