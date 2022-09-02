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
import Tickets from './components/pages/Tickets/Tickets';
import AdminPanel from './components/pages/AdminPanel/AdminPanel';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/pages/Pofile/Profile';
import Help from './components/pages/Help/Help';
import ThankYouPage from './components/pages/ThankYouPage/ThankYouPage';


function App() {
  return (
    <div className="App">

      <Layout/>
    
      
      <Routes>
       <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:employee/signup" element={<Signup/>}/>
        <Route path="/database" element={<Database/>}/>

        <Route path="/profile" element={<Profile/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
        <Route path="/admin" element={<AdminPanel/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/help-success" element={<ThankYouPage/>}/>



      </Routes>
     
     
    </div>
  );
}

export default App;
