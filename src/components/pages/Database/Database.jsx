import React from 'react'
import AppNavBar from '../../AppNavBar/AppNavBar'
import DbCompany from '../../DbCompany/DbCompany'
import EditDelete from '../../EditDelete/EditDelete'
import {Link} from 'react-router-dom'

function Database() {
  return (
    <>
    <div>
    <AppNavBar/>
        <div className="tabs">
            <Link to="/clients" className="tab tab-lg tab-lifted">Clients</Link> 
            <a className="tab tab-lg tab-lifted tab-active">Companies</a> 
            
        </div>
    

    <DbCompany />

        

    
    </div>
    
    </>
  )
}

export default Database