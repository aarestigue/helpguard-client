import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../context/auth.context';
import './Login.css';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/admin');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="LoginPage">
      <h1>Welcome! Please Login</h1>
      <div className="text-center lg:text-left">
      <form className='login-form' onSubmit={handleSubmit}>

      <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <label className="input-group">
                <span> @ </span>
                <input type="text" name="email" value={email} onChange={handleEmail} placeholder="Enter your email" className="input input-bordered" />
            </label>
     </div>

     <div className="form-control">
            <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
            </label>
            <label className="input-group">
                <span>**</span>
                <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Enter your password" className="input input-bordered" />
            </label>
     </div>

       <button className='btn-cta' type="submit">Login</button>
      </form>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Don't have an account?</p>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default LoginPage;