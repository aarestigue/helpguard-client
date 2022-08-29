import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppNavBar from './components/AppNavBar/AppNavBar';
import Database from './components/pages/Database/Database';


function App() {
  return (
    <div className="App">
      <Layout/>
      
      <Routes>
        <Route path="/database" element={<Database/>}/>

      </Routes>
     
     
    </div>
  );
}

export default App;
