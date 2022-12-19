import React from 'react'
import { FaCommentDots, FaRecycle, FaHeart, FaShareSquare } from "react-icons/fa";

function NewsFeed({tweets}) {
  
  function Tweet({tweet}) {
    return(
      <div className='tweets'>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--5BGUGTe6--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/891116/5eb7c338-16d5-4d67-a6f0-4cc7005a51d8.jpeg"></img>
          <div>
            <div className='tweet-header'>
              <h1>@ian</h1>
              <h4>-2h</h4>
            </div>
            <div>
              <text id='tweet'>{tweet}</text>
            </div>
            <div className='tweet-footer'>
              <FaCommentDots/>
              <FaRecycle/>
              <FaHeart />
              <FaShareSquare />
            </div>
          </div>

      </div>
    )
  }

  return (
    <div>
      {tweets.map((tweet) => <Tweet tweet={tweet}></Tweet>)}
    </div>
  )
}

export default NewsFeed;