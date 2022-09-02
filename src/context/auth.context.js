import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

//creates the context
const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false)
  const navigate = useNavigate();

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/auth/verify`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          setLoading(false);
          setLoggedIn(true);
          setUser(response.data);
        })
        .catch((err) => {
          setLoading(false);
          setLoggedIn(false);
          setUser(null);
        });
    } else {
      setLoading(false);
      setLoggedIn(false);
      setUser(null);
    }

    
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    authenticateUser();
    navigate('/');
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, loggedIn, user, storeToken, authenticateUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };