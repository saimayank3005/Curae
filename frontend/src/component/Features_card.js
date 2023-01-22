import React from 'react'

export default function features_card(props) {
  return (
    <div className='features_card'>
        <div className='card-content'>
        <h3>{props.heading}</h3>
{props.desc}
</div>
<div className='features-card-img'>
    <img src={props.img}/>
</div>
    </div>
  )
}
