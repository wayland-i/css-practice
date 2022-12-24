import React from 'react'

function Bulb( {key} ) {

    const handleBulbClick = (e) => {
        console.log(e)
      }

  return (
    <div onClick={handleBulbClick} key={key}>
        bulb
    </div>
  )
}

export default Bulb;