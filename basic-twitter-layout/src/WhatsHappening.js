import React from 'react'
import { FaSearchLocation, FaImage, FaVideo, FaVoteYea, FaSmile, FaCalendarCheck, FaHandSparkles } from "react-icons/fa";

function WhatsHappening() {
  return (
    <div >
      <h1>Home</h1>
      <FaHandSparkles />
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--5BGUGTe6--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/891116/5eb7c338-16d5-4d67-a6f0-4cc7005a51d8.jpeg"/>
      <input placeholder="what's happening?"></input>
      <button>Tweet</button>
      <div>
        <FaImage />
        <FaVideo />
        <FaVoteYea />
        <FaSmile />
        <FaCalendarCheck />
        <FaSearchLocation />
      </div>
    </div>
  )
}

export default WhatsHappening;