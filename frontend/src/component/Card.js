import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export default function Card(props) {
  return (
    <div className='Card'>
      <img className='card-img'src={props.img}/>
<h2 className='card-heading'>{props.heading}</h2>
{props.desc}

    </div>
  )
}
