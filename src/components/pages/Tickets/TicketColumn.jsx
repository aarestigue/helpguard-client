import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { Droppable } from 'react-beautiful-dnd';
import { UserMenu } from 'react-admin';
import styled from 'styled-components'
import TicketCard from './TicketCard';

function TicketColumn(props) {

    const Container = styled.div`

    @media screen and (max-width: 690px){
    width: 90%;
    margin: 2vw;
    border: none;
    border-radius: 0.8vw; 
    background-color  :  #80808018;
    
    }

    @media screen and (min-width: 691px){
    width: 30%;
    margin: 2vw;
    border: none;
    border-radius: 0.8vw;   
    background-color  :  #80808018;
    }
    
    `;
    const Title = styled.h3`
    padding: 2vw;
    background-color: #243f5ad6;
    border-radius: 0.8vw;
    color: white;
    `;
    const StateList = styled.div`
    padding: 2vw;
    `;

    const [ticketsStates, setTicketsStates] = useState(props.ticketsStates);
    const [ticketOwner, setTicketOwner] = useState("");

      const getTicketInfo = async (ticketId) => {
        try {
          const storedToken = localStorage.getItem('authToken');
      
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          
          setTicketOwner(response.data);
          
          
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getTicketInfo();
      }, []);

      useEffect(() => {
        setTicketsStates(props.ticketsStates)
      }, [props]);

      

      
  return (
    <div className='column-container'> 
       
        {ticketsStates && ticketsStates.map((state)=> {
            return (
            <Container>
            <Title>{state.statusName}</Title>

            <Droppable droppableId={state._id}>
                {(provided)=> (
                     <StateList
                     ref={provided.innerRef}
                     {...provided.droppableProps}>

                     {state.tickets.map((ticket, index)=> {
                         return (
                             <TicketCard 
                     key={ticket._id}
                     subject={ticket.subject}
                     description={ticket.description}
                     priority={ticket.priority}
                     getInfo={() => getTicketInfo(ticket._id)}
                     owner={ticket.owner}
                     company={ticket.company}
                     id={ticket._id}
                     index={index}
                     />
                         )
                     })}
                     {provided.placeholder}
                     </StateList>
                )}
           
            </Droppable>
            
            </Container>)
            
        })}
        

    </div>

    
  )
}

export default TicketColumn