import React ,{useState} from 'react'
import  './Faq.css';
import { AiOutlineDown } from 'react-icons/ai';
export default function Faq() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };
    const handleClick2 = event => {
        // 👇️ toggle shown state
        setIsShown2(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
      };
      const handleClick3 = event => {
        // 👇️ toggle shown state
        setIsShown3(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
      };
  return (
   <>
<div className='Faq'>
    <br/>
    <br/>
    <h1 className='Faq-heading'>Frequently Asked questions</h1>
    <br/><div className='ques'>
        <div className='ques-hd'>
    <h3>What is Telemedicine?</h3>
    <AiOutlineDown className='down-icon'onClick={handleClick}/>
    </div>
    <div>
      {isShown && (
        <div>
          <p>
          The delivery of healthcare from a distance using electronic information and technology, such as computers, cameras, videoconferencing, satellites, wireless communications, and the Internet. 
</p>
        </div>
      )}
    </div>
   </div>
<div className='ques'>
<div className='ques-hd'>
    <h3>What is Remote Monitoring?</h3>
    <AiOutlineDown className='down-icon' onClick={handleClick2}/>
    </div>
    <div>
      {/* 👇️ show elements on click */}
      {isShown2 && (
        <div>
          <p>
          Remote Monitoring (also shortened to RMON) refers to the specification that helps MSPs monitor the network operational activities of their clients by using remote devices, which are known as probes or monitors. This helps MSPs ensure efficient network infrastructure control and management.
</p>
        </div>
      )}
    </div>
    </div>
<div className='ques'>
<div className='ques-hd'>
    <h3>What is chat bot system?</h3> <AiOutlineDown className='down-icon' onClick={handleClick3}/>
    </div>
    <div>
      {/* 👇️ show elements on click */}
      {isShown3 && (
        <div>
          <p>
          A chatbot is a computer program that uses artificial intelligence (AI) and natural language processing (NLP) to understand customer questions and automate responses to them, simulating human conversation.
</p>
        </div>
      )}
    </div>
    </div>

    </div>
   </>
  )
  function Box() {
    return (
      <div>
        <h2>Box</h2>
      </div>
    );
  }
}
