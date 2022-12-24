import React, { useState } from 'react'
import LightBulb from './LightBulb';

function BulbGroup() {
    const [bulbCount, setBulbCount] = useState(1);
    const [isGroupOn, setIsGroupOn] = useState(false);
    const [isOneOn, setIsOneOn] = useState(false)

    const bulbs = [];
    for (let i = 0; i < bulbCount; i++) {
        bulbs.push(<LightBulb isOn={isGroupOn} isOneOn={isOneOn} setIsOneOn={setIsOneOn}/>);
        
    }

    const handleAddBulb = () => {
        
        setBulbCount((bulbCount) => bulbCount + 1);
    }

    const handleRemoveBulb = () => {
        if (bulbCount > 0) {
            setBulbCount((bulbCount) => bulbCount - 1);
        } else {
            return null;
        }
    }

    const handleSwitch = () => {
        setIsGroupOn((isGroupOn) => !isGroupOn);
    }


  return (
    <div>
        <div className='groups'>
            <button onClick={handleSwitch}>Switch</button>
            <button onClick={handleAddBulb}>Add Bulb</button>
            <button onClick={handleRemoveBulb}>Remove Bulb</button>
            <br />
            {bulbs}
        </div>
    </div>
  )
}

export default BulbGroup;