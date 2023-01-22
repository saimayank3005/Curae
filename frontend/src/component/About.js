import React from 'react'
import chat from '../images/chat.png';
import tracking from '../images/tracking.png';
import find from '../images/find.png';
import healthInsurannce from '../images/healthcare.png';
import mission from '../images/healthcare.png'
import Features_card from './Features_card';
const About = () => {
  return (
    <>
      <div className='About-us container mt-3'>
        <h1>Our Mission</h1>
        <div className='mission pt-3'>
        Our proposed solution is to improve access to healthcare for remote and underserved areas
         includes the use of telemedicine for virtual consultations, wearable technology for tracking 
         and monitoring health data, and a patient portal with features such as remote monitoring,
         appointment scheduling, secure email communication, and health insurance information. </div>

        <div className='features mt-5'>

          <img src={mission} className='features_img' />
          <div className='div2'>


            Our technology solution aims to improve patient outcomes by providing a comprehensive, integrated platform for healthcare management. This platform will use cutting-edge technologies such as Electronic health records, telemedicine, remote monitoring to improve communication and coordination among healthcare providers, increase access to care for underserved populations, and help patients better manage their health.
            The platform will also include a patient portal, where patients can access their medical records, schedule appointments, and communicate with their healthcare providers. Additionally, it will have a built-in medication management system that can track patient's medication schedules, dosages and interactions, helping to prevent medication errors.
            To further improve patient outcomes, the platform will also include a remote monitoring system that allows healthcare providers to monitor patients' vital signs and other health data remotely, which can help them identify potential health problems early and take action to prevent complications.
            We believe that this platform will greatly improve patient outcomes by providing patients with more coordinated, effective care, and by giving healthcare providers the tools they need to make more informed decisions and deliver better care.
          </div></div>
        <br /><br />
        <div className='future-div my-5'>
          <h2>Future Scope</h2>
          <Features_card img={chat} heading='Integration with other technologies' desc='The project could explore the integration of artificial intelligence and machine learning to analyze patient data and provide personalized treatment recommendations.' />
          <Features_card img={healthInsurannce} heading='Telehealth' desc='The project could explore the integration of artificial intelligence and machine learning to analyze patient data and provide personalized treatment recommendations.' />
          <Features_card img={tracking} heading='Research and Development' desc='Continual research and development on the technology to improve its accuracy and efficiency, and also to explore new areas of application.' />
        </div>
      </div>


    </>
  )

}

export default About