import React from 'react'
import { NavLink, Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";

function SideBarNav() {
  return (
    <div className='nav'>
      <NavLink to="/">
          <AiOutlineHome />
      </NavLink>
      <NavLink to="/news">
        <BsNewspaper />
      </NavLink>
      <NavLink to="/user">
        <AiOutlineUser />
      </NavLink>
      <NavLink to="/settings">
        <AiOutlineSetting />
      </NavLink>
    </div>
  )
}

export default SideBarNav;