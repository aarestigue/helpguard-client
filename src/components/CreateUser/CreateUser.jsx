import deleteIcon from '../../images/trash.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { UserMenu } from 'react-admin';

function CreateUser({update, onClose}) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('client');
 
    const [allAgents, setAllAgents] = useState([]);
    const [allCompanies, setAllCompanies] = useState([]);

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

    const getAllCompanies = async () => {
        try {
    
          const storedToken = localStorage.getItem('authToken');
    
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/companies`, 
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            }
          }
          )
        
       /* let usersArr = [];
        let usersArray = response.data.allUsersmap((user)=> usersArr.push(`${user.name} ${user.lastName}`)) */
        
       console.log(response.data[0].name)
        setAllCompanies(response.data);
    }
        catch (error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
      getAllCompanies();
      
    }, []);

      const handleName= (e) => setName(e.target.value);
      const handleLastName = (e) => setLastName(e.target.value);
      const handleEmail = (e) => setEmail(e.target.value);
      const handleCompany = (e) => setCompany(e.target.value);
      const handleRole = (e) => setRole(e.target.value);
      const handleOwner = (e) => setOwner(e.target.value);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const body = { name, lastName, email, company, role, owner};
        const storedToken = localStorage.getItem('authToken');
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/users`, body, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          }
        })
        .then((client) => {
            setName('');
            setLastName('');
            setEmail('');
            setCompany('');
            setRole('');
            setOwner('');
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
        <h3 class="font-bold text-lg">Create a Client</h3>

    <form onSubmit={handleSubmit}>

        <div className="form-control">
            
            <label className="label">
            <span className="label-text">First Name</span>
            </label>
            
            <label className="input-group">
                <input type="text" name="name" onChange={handleName}  placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
            </label>
        </div>

        <div className="form-control">
            
            <label className="label">
            <span className="label-text">Last Name</span>
            </label>
            
            <label className="input-group">
                <input type="text" name="lastName" onChange={handleLastName}  placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
            </label>
        </div>

        <div className="form-control">
            
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            
            <label className="input-group">
                <input type="text" name="email" onChange={handleEmail}  placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
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

     <label htmlFor="company" className="label">
        <span className="label-text">Company</span>
      </label>   

      <select style={{width: "100%"}} name="company" id="" multiple onChange={handleCompany}>

        {allCompanies && (
        allCompanies.map((el) => {
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

        <input type="hidden" value={"client"} name="role" />
     
    


     
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
  

export default CreateUser