import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='title'>
            <span style={{color: 'turquoise', fontSize: '2em', fontWeight: 'bold'}}>//</span>
            <span style={{fontSize: '2em', fontWeight: 'bold'}}>Project Showcase</span>
        </div>
        <div>
            <button>Light Mode</button>
        </div>
    </div>
  )
}

export default Header;