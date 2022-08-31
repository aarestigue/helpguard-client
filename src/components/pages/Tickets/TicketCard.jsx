import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Draggable } from 'react-beautiful-dnd';
import editIcon from '../../../images/edit.svg'

function TicketCard(props) {
    
    const {states, company, info, subject, description, sender, priority, owner, index, id} = props
    console.log(owner)
    

    const Container = styled.div`

    @media screen and (max-width: 690px){
    margin-bottom: 2vw;
    border: 0.2vw solid lightgrey;
    border-radius: 0.8vw;
    padding: 2vw;
    background-color: white;
    }

    @media screen and (min-width: 691px){
    margin-bottom: 2vw;
    border: 0.2vw solid lightgrey;
    border-radius: 0.8vw;
    padding: 2vw;
    background-color: white;
    }
    
    `;
    const Title = styled.h3`
    padding: 2vw;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
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

      const deleteTicket = (id) => {
        const storedToken = localStorage.getItem('authToken');
        axios
          .delete(`${process.env.REACT_APP_API_URL}/api/tickets/${id}`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            }
            })
          .then(() => {
            getTickets();
            
          })
          .catch((err) => console.log(err));

      }



  return (
   
    <Draggable draggableId={id} index={index}>
        {(provided)=> (
            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            
            <Title>
                <h2>{subject}</h2>
                <p>{priority}</p>
            </Title>
           
            <div>
                <p>Agent: {owner}</p>
                <p>Company: {company}</p>
            </div>

            <div>
            <ul class="menu menu-horizontal bg-base-100 rounded-box" >
  
  
            <li /* onClick={()=> setCloseModal(false)} */>
<a >

<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
<label for="my-modal-6" > <img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor">
</img>Edit
</label>   
</a>
</li>

{/* <li onClick={deleteTicket(id)}>
<a >

<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
<label for="my-modal-6" > <img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor">
</img> Delete
</label>   
</a>
</li> */}

<li /* onClick={()=> setOpenCreateModal(true)} */>
<a >

<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
<label for="my-modal-6" > <img src={editIcon} className="h-5 w-5" fill="none" alt=""  viewBox="0 0 24 24" stroke="currentColor">
</img>See detail
</label>   
</a>
</li>
</ul>
            </div>
            
            </Container>
        )}
            
            
    </Draggable>
            
    )
}

export default TicketCard