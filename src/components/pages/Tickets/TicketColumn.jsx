import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {Multiselect} from 'multiselect-react-dropdown';
import { Droppable } from 'react-beautiful-dnd';
import { UserMenu } from 'react-admin';
import styled from 'styled-components'
import TicketCard from './TicketCard';

function TicketColumn() {

    const Container = styled.div`
    margin: 2vw;
    border: 0.3vw solid orange;
    border-radius: 0.8vw;
    `;
    const Title = styled.h3`
    padding: 2vw;
    `;
    const StateList = styled.div`
    padding: 2vw;
    `;

    const [ticketStates, setTicketStates] = useState([])

    const getStates = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
      
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tickets-states`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          
          setTicketStates(response.data.reverse());
          
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getStates();
      }, []);

  return (
    <div>
       
        <div>{ticketStates && ticketStates.map((state)=> {
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
                     subject={ticket.subject}
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
            
        })}</div>
        

    </div>

    
  )
}

export default TicketColumn