import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

function ThankYouPage() {

  const [quote, setQuote] = useState('');

  const getQuotes = async() => {

    try{

        let quote = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        console.log(quote.data)
        setQuote(quote.data)

    } catch (error) {
        console.log(error);
      }
}

useEffect(() => {
    getQuotes();
  }, []);
  
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
        <div className="max-w-md">
            <h2 className="text-5xl font-bold">Help is comming!</h2>
            <p className="py-6">A HelpGuard agent will contact you in 15 minutes or less.</p>
            <br />
            <div className='quote-container'>
                <h4>In the meantime, laughing with Friends always help ;)</h4>
                <h3 className='quote'>{quote.quote}</h3>
                <p>-{quote.character}</p>
            </div>
            <br />
        <Link to="/tickets"><button class="btn-cta">Go back</button></Link> 
    </div>
  </div>
</div>
    
    </>
  )
}

export default ThankYouPage