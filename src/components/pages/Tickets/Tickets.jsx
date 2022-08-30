import React from 'react'
import addIcon from '../../../images/add.png'

function Tickets() {
  return (
    <div className='ticket-pipeline'>
        <div className='ticket-status'>
         <div className="ticket-status-title">
           <h3>Assigned</h3>  
           <button><img src={addIcon} alt="" /></button>
        </div>
         <div className="ticket-status-body">
         
         <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">

                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>

            </div>
        </div>
         </div>
            
            </div>
        <div className='ticket-status'>In progress</div>
        <div className='ticket-status'>Solved</div>
        
   
    </div>
  )
}

export default Tickets