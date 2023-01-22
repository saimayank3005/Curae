import React from 'react'
import './Consultation.css';
export default function Consulation_card(props) {
  return (

    <div className='Consultation_card'>
        <img className='cons-card-img'src={props.img}/>
<h2 className='cons-card-heading'>{props.heading}</h2>
{props.desc}

        </div>
  )
}
