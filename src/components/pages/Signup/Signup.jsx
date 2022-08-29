import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

function SignupPage() {

  const { hgEmployee } = useParams();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState(0);
 

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleTelephone = (e) => setTelephone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password, name, lastName, telephone};

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, body)
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Create an Account</h1>

     

      <form onSubmit={handleSubmit}>

      <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <label className="input-group">
                
                <input type="text" name="email" value={email} onChange={handleEmail} placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            </label>
     </div>

     <div className="form-control">
            <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
            </label>
            <label className="input-group">
                
                <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
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

     

     
    <input type="hidden" name="hgEmployee" value={hgEmployee} placeholder="Enter your last name"  />
        

     
        <button type="submit" className='btn btn-success'>Sign up</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default SignupPage;