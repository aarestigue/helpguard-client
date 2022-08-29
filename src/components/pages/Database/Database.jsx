import React from 'react'
import AppNavBar from '../../AppNavBar/AppNavBar'
import DbCompany from '../../DbCompany/DbCompany'

function Database() {
  return (
    <div>
    <AppNavBar/>
        <div class="tabs">
            <a class="tab tab-lg tab-lifted">Clients</a> 
            <a class="tab tab-lg tab-lifted tab-active">Companies</a> 
            
        </div>

    <DbCompany/>

        


    </div>
  )
}

export default Database