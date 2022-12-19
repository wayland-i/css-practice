import React from 'react'

function NewsFeed({tweets}) {
  

  return (
    <div>
      {tweets.map((tweet) => <li>{tweet}</li>)}
    </div>
  )
}

export default NewsFeed;