import React from 'react'
import AppNavBar from '../../AppNavBar/AppNavBar'
import DbCompany from '../../DbCompany/DbCompany'
import EditDelete from '../../EditDelete/EditDelete'

function Database() {
  return (
    <>
    <div>
    <AppNavBar/>
        <div className="tabs">
            <a className="tab tab-lg tab-lifted">Clients</a> 
            <a className="tab tab-lg tab-lifted tab-active">Companies</a> 
            
        </div>
    <EditDelete/>

    <DbCompany/>

        

    
    </div>
    
    </>
  )
}

export default Database