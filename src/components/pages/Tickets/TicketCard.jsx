import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Draggable } from 'react-beautiful-dnd';

function TicketCard(props) {
    
    const {states, subject, description, sender, index, id} = props
    console.log(subject)
    

    const Container = styled.div`
    margin-bottom: 2vw;
    border: 0.2vw solid lightgrey;
    border-radius: 0.8vw;
    padding: 2vw;
    background-color: white;
    `;
    const Title = styled.h3`
    padding: 2vw;
    `;
    const StateList = styled.div`
    padding: 2vw;
    `;

    const [ticketsDetail, setTicketsDetail] = useState([])

    const getTickets = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
      
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tickets`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          
          setTicketsDetail(response.data.reverse());
          
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getTickets();
      }, []);



  return (
   
    <Draggable draggableId={id} index={index}>
        {(provided)=> (
            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            
            <Title>{subject}</Title>
            </Container>
        )}
            
            
            </Draggable>
            
    )
}

export default TicketCard