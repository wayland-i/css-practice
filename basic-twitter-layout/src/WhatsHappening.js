import React, { useState } from 'react';
import { FaSearchLocation, FaImage, FaVideo, FaVoteYea, FaSmile, FaCalendarCheck, FaHandSparkles } from "react-icons/fa";

function WhatsHappening({setTweets, tweets}) {

  const handleClick = (e) => {
    e.preventDefault();
    e.target.value.reset();
    setTweets([...tweets, input]);
    

  }

  const [input, setInput] = useState('')
  
  const handleInput = (e) => {
    setInput(e.target.value);

  }

  return (
    <div className='wh-all'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}} >
        <h1 style={{ display: 'inline', fontSize: 'larger', marginLeft: '2.5%'}}>Home</h1>
        <FaHandSparkles style={{ display: 'inline'}}></FaHandSparkles>
      </div>
      <div style={{ display: 'inline-flex'}}>
        <img 
          id='profile'
          alt='profile'
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--5BGUGTe6--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/891116/5eb7c338-16d5-4d67-a6f0-4cc7005a51d8.jpeg"
          />
        <input id='input' placeholder="what's happening?" onChange={handleInput}></input>
      </div>
      <form className='wh-bottom'>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center'}} id='wh-media' >
          <FaImage />
          <FaVideo />
          <FaVoteYea />
          <FaSmile />
          <FaCalendarCheck />
          <FaSearchLocation />
        </div>
        <button onClick={handleClick} style={{ display: 'inline', color: 'white', backgroundColor: 'lightskyblue', height: '40px', width: '100px', borderRadius: '30%'}}>Tweet</button>
      </form>
    </div>
  )
}

export default WhatsHappening;