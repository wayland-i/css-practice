import React, { useState } from 'react'
import Bulb from './Bulb';

function BulbGroup() {

  const [bulbCount, setBulbCount] = useState(4);

  const handleBulbClick = (e) => {
    console.log(e.target)
  }
  
  const bulbs = [];
  for (let i = 0; i < bulbCount; i++) {
    bulbs.push(<Bulb key={i} onClick={handleBulbClick}>bulb</Bulb>)
  }



  return (
    <>
        <button>Switch All</button>
        <button>Add Bulb</button>
        <button>Remove Bulb</button>
        <br />
        {bulbs}
    </>
  )
}

export default BulbGroup;