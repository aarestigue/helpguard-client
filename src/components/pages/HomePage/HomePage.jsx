import React from 'react'
import homeImage from '../../../images/helping-hand.png'
import './HomePage.css'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
       <div className="hero min-h-screen bg-base-200">

        <div className="hero-content flex-col lg:flex-row-reverse">
            
            <img src={homeImage} className="home-image" />
        <div>
            <h1 className="text-5xl font-bold">Scale your company with happy customers</h1>
            <p className="py-6">We're 24/7 available to help you build better relationships
            with your clients.</p>
       <Link to="/false/signup"> <button className="btn btn-primary">Create an account</button></Link>
    </div>
  </div>
</div>
    </>
  )
}

export default HomePage