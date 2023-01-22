import React from 'react'
import './Consultation.css';
import neurology from '../images/neurology.png';
import dentist from '../images/dentistry.png';
import cardiology from '../images/cardiology.png';
import stomach from '../images/stomach.png';
import urology from '../images/urology.png';
import orthopaedic from '../images/orthopaedics.png';
import dermatologist from '../images/dermatologist.png';
import allergy from '../images/allergy.png';
import Consulation_card from './Consulation_card';
export default function Consultations() {
  return (
    <div className='Consultations'>
        <h2 className='Consultation-heading'>
            Our Consulting Specialities </h2>
            <br/>
           <div className='cons-desc'> Ask a doctor online and get quick medical advice
           for your <br/> health queries. Our medical panel consist of over 3500+ doctors from 80+ specialities</div>
           <br/>
           <br/><div className='cons_card'>
             <Consulation_card img={dentist} heading="Dentist"/>
            <Consulation_card img={neurology} heading="Neurology"/>
            <Consulation_card img={stomach} heading="Abdomen"/>
            <Consulation_card img={urology} heading="Urology"/>
            </div>
            <div className='cons_card'>
             <Consulation_card img={orthopaedic} heading="Orthopaedic"/>
            <Consulation_card img={cardiology} heading="Cardiology"/>
            <Consulation_card img={dermatologist} heading="Dermatologist"/>
            <Consulation_card img={allergy} heading="Allergy"/>
            </div>
              </div>
  )
}
