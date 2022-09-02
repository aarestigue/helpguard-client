import React from 'react'
import Dashboard from '../../Dashboard/Dashboard'
import Sidebar from '../../Sidebar/Sidebar'

function AdminPanel() {
  return (
<div className='admin-body'>
    <div className='admin-glass'>
        <Sidebar/>
        <Dashboard/>
        <div></div>
       

    </div>
</div>
  )
}

export default AdminPanel