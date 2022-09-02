import React from 'react'
import addIcon from '../../../images/add.png'
import {DragDropContext} from 'react-beautiful-dnd';
import TicketColumn from './TicketColumn';
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Result from 'postcss';
import { DropResult } from 'react-beautiful-dnd';
import axios from 'axios';
import { current } from 'daisyui/src/colors';
import CreateColumn from './CreateColumn';
import Sidebar from '../../Sidebar/Sidebar';

function Tickets() {

  const Container = styled.div`

    @media screen and (max-width: 690px){
    width: 90%;
    margin-bottom: 2vw;
    border: 0.2vw solid lightgrey;
    border-radius: 0.8vw;
    padding: 2vw;
    background-color: white;
    }

    @media screen and (min-width: 691px){
    width: 90%;
    margin-bottom: 2vw;
    border: 0.2vw solid lightgrey;
    border-radius: 0.8vw;
    padding: 2vw;
    background-color: #eadac2;
    display: flex;
    }
    
    `;

  const [ticketsState, setTicketsState] = useState([]);
  const [newState, setnewState] = useState('');
  const [ticketsList, setticketsList] = useState([]);

  const getStates = async() => {

    try {

      const storedToken = localStorage.getItem('authToken');
  
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tickets-states`, 
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        }
      }
      )
    
    console.log(response.data)
    setTicketsState(response.data);

    } catch (error) {
      console.log(error);
    }

  }

  const changeStates = async(destination, source, ticket) => {

    try {

      const storedToken = localStorage.getItem('authToken');
  
      let response = await axios.put(`${process.env.REACT_APP_API_URL}/api/tickets-states/change`, {destination, source, ticket}, 
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        }
      }
      )
    
    console.log(response.data)
    getStates()

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getStates();
    
  }, []);

  /* const [columns, setColumns] = useState([]); */

  const addTicket = async(draggableId, destination)=> {
    const storedToken = localStorage.getItem('authToken');
    try{

    const body = {statusColumn : destination.droppableId}
    let ticket = await axios.put(`${process.env.REACT_APP_API_URL}/api/tickets/${draggableId}`, body,
  {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    }
  }
  )
  console.log(`ticket: ${ticket}`)

    }catch (error) {
      console.log(error);
    }
    
   }

  
   const onDragEnd = (DropResult) => {
  
    
    
    console.log(DropResult)
  
    const {destination, source, draggableId} = DropResult;

    
    if (!destination) {
      return;
    }

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    //Column change
    if(
      destination.droppableId !== source.droppableId
    ) {
      changeStates(destination.droppableId, source.droppableId, draggableId)
    }


  
    
      /* if(source.droppableId === '630e8b5eb7f76752ba5e3147'){
      
      addTicket(draggableId, destination); 
      
        
      console.log(`current state: 630e8b5eb7f76752ba5e3147`)
  
      } */
    
  
 

    

/*
     const removeTicket = async()=> {
      try{

        let ticket = await axios.put(`${process.env.REACT_APP_API_URL}/api/tickets-states/${source.droppableId}/remove-ticket/${draggableId}`, 
       {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      }
    }
    )
 



      }catch (error) {
        console.log(error);
      }
     }
  
  tickestState.map((state) => {
    if(source.droppableId === state._id){
    
    addTicket();
    removeTicket();
      
    console.log(`current state: ${state.statusName}`)

    }
  })
   */

  
  
  
}



  

  return (
    <>

   <div className='admin-body'>
      <div className='admin-glass'>
        <Sidebar/>
        
        <div>
        {/* <h1>Ticket pipeline</h1> */}
        {/* <CreateColumn/> */}
        <DragDropContext className="column-container" onDragEnd={onDragEnd}>
          <TicketColumn ticketsStates={ticketsState}/>
        </DragDropContext>
        </div>
        
        
        
        <div>


    </div>
       
       <div className="ticket-header">
       

       

       </div>
        

    
    
    
    </div>
</div>

    
    </>
  )
}

export default Tickets