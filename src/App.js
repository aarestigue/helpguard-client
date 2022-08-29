import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppNavBar from './components/AppNavBar/AppNavBar';
import Database from './components/pages/Database/Database';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import HomePage from './components/pages/HomePage/HomePage';
import DbCompany from './components/DbCompany/DbCompany';
import DbUsers from './components/DbUsers/DbUsers';


function App() {
  return (
    <div className="App">
      <Layout/>
      <HomePage/>
      
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:employee/signup" element={<Signup/>}/>
        <Route path="/database" element={<Database/>}/>

        <Route path="/companies" element={<DbCompany/>}/>
        <Route path="/clients" element={<DbUsers/>}/>

      </Routes>
     
     
    </div>
  );
}

export default App;
