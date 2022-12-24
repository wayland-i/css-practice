import React from 'react';
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";

function LightBulb({ isOn, isGroupOn, isOneOn, setIsOneOn }) {

  const singleBulbClicked = (e) => {
    // <LightBulb isOn={isGroupOn} isOneOn={isOneOn}/>
    console.log(e.target)
    console.log(e.target)
    setIsOneOn(isOneOn => !isOneOn)
  }

  return (
    <span style={{ fontSize: '6em' }}>
        {isOn ? <AiFillBulb style={{ color: 'burlywood'}} onClick={singleBulbClicked}/> : <AiOutlineBulb onClick={singleBulbClicked}/>}
    </span>
  )
}

export default LightBulb;