import React from 'react';
import { AiFillBulb, AiOutlineBulb } from "react-icons/ai";

function LightBulb({ isOn }) {
  return (
    <span style={{ fontSize: '6em' }}>
        {isOn ? <AiFillBulb style={{ color: 'burlywood'}}/> : <AiOutlineBulb />}
    </span>
  )
}

export default LightBulb;