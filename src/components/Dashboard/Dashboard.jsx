import React from 'react'
import './Dashboard.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { UilRedo } from '@iconscout/react-unicons'

function Dashboard() {

 // Data for tickets received vs solved

  const [receivedTickets, setReceivedTickets] = useState(0);
  const [solvedTickets, setSolvedTickets] = useState(0);
  const [percentageSolved, setPercentageSolved] = useState(0);

  const ticketQuantity = async ()=> {

    try {

    const storedToken = localStorage.getItem('authToken');

    let tickets = await axios.get(`${process.env.REACT_APP_API_URL}/api/tickets`, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    });

    let amountOfTickets = await tickets.data.length;
    let solvedTickets = await tickets.data.filter((ticket)=> ticket.status === 'Closed').length;
    let calculatePercentage = await Math.ceil((solvedTickets/amountOfTickets)*100)

    console.log(calculatePercentage)
    setReceivedTickets(amountOfTickets);
    setSolvedTickets(solvedTickets);
    setPercentageSolved(calculatePercentage);

    } catch (error) {
        console.log(error);
      }

  }

  const refreshResults = ()=> {
    render()
  }

  useEffect(() => {
    ticketQuantity();
  }, [refreshResults]);
  
  // Data for tickets received per Month (current month)

  const [dailyTickets, setDailyTickets] = useState(0);
  const [monthlyTickets, setMonthlyTickets] = useState(0);
  
  // Data for Productivity (tickets solved per agent)

  const [ticketsAgent, setTicketsAssigned] = useState(0);
  const [ticketsSolvedAgent, setticketsSolvedAgent] = useState(0);
  const [percentageProductivity, setPercentageProductivity] = useState(0);


  return (
    <div className='dashboard'>
        
        <h1>Dashboard</h1>
        {/* <button><span><UilRedo/></span> Refresh</button> */}
        <Cards/>
        <Table/>


    </div>
  )
}

export default Dashboard