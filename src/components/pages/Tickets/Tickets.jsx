import React from 'react'
import addIcon from '../../../images/add.png'
import {DragDropContext} from 'react-beautiful-dnd';
import TicketColumn from './TicketColumn';
import styled from 'styled-components'
import { Result } from 'postcss';

function Tickets() {

  /* const [columns, setColumns] = useState([]); */

  /* onDragEnd = result => {null} */


  return (
    <>
    <h2>Ticket pipeline</h2>
    <DragDropContext /* onDragEnd={onDragEnd} */>
    
    <TicketColumn/>
    </DragDropContext>
    </>
  )
}

export default Tickets