import React from 'react'
import { useEffect, useState } from 'react';
import AppNavBar from '../../AppNavBar/AppNavBar'
import DbCompany from '../../DbCompany/DbCompany'
import EditDelete from '../../EditDelete/EditDelete'
import {Link} from 'react-router-dom'
import DbUsers from '../../DbUsers/DbUsers'

function Database() {

  const [modelPage, setModelPage] = useState("")
  const [isClientsActive, setClientsActive] = useState(false);
  const [isCompaniesActive, setCompaniesActive] = useState(true);

  const getModelPage = (modelPage) => {

    if (modelPage === 'clients') {
        return (
            <DbUsers/>
        )}

    else {
        return (
            <DbCompany />
        )}
    }

  const toggleClientsClass = () => {
    setClientsActive(true);
    setCompaniesActive(false);
   
  };

  const toggleCompaniesClass = () => {
    setCompaniesActive(true);
    setClientsActive(false);
    
  };

  return (
    <>
    <div>
    <AppNavBar/>
        <div className="tabs">
            <a  onClick={()=> {setModelPage('clients'); toggleClientsClass()}}  className= {isClientsActive ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted" }>Clients</a> 
            <a  onClick={()=> {setModelPage('companies'); toggleCompaniesClass()}} className={isCompaniesActive ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted" }>Companies</a> 
            
        </div>
    
    {getModelPage(modelPage)}
    

        

    
    </div>
    
    </>
  )
}

export default Database