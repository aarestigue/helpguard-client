import React from 'react'
import './Card.css'
import { useState, useEffect } from 'react';
import {AnimateSharedLayout} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Card(props) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="card">
        <AnimateSharedLayout>
            {expanded ? 'Expanded' /* <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/> */ : <CompactCard param={props}
            setExpanded={()=>setExpanded(true)}
            /> }
        </AnimateSharedLayout>
    </div>
  )
}

// COMPACT CARD
function CompactCard ({param, setExpanded}){
    const Png = param.png;

/* console.log(Circular.values); */
    
    return (
        <div className="compact-card"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
          }}
          onClick={setExpanded}
          >
            <div className="radial-bar">
             
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
               
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
            </div>
        </div>
    )
}

export default Card