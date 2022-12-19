import React from 'react'
import { FaPencilAlt, FaHome, FaSearch, FaPeopleCarry, FaFacebookMessenger, FaBell, FaBookmark, FaBitcoin, FaUserCircle, FaListUl } from "react-icons/fa";

function Dashboard() {
  return (
    <>
        <div className='dash'>
            <nav className='top-dash'>
                <FaHome />
                <FaSearch />
                <FaPeopleCarry/>
                <FaBell/>
                <FaFacebookMessenger />
                <FaBookmark/>
                <FaBitcoin/>
                <FaUserCircle/>
                <FaListUl/>
                
            </nav>
            <div className='bottom-dash'>

                    <FaPencilAlt style={{width: '30px', height: '30px', padding: '20%', backgroundColor: 'lightskyblue', borderRadius: '50%'}}/>
 
                <img alt='profile' src='https://res.cloudinary.com/practicaldev/image/fetch/s--5BGUGTe6--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/891116/5eb7c338-16d5-4d67-a6f0-4cc7005a51d8.jpeg'></img>
            </div>
        </div>

        <div className='separator'></div>

    </>
  )
}

export default Dashboard;