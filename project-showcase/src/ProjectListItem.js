import React from 'react'
import { FaBeer } from 'react-icons/fa';

function ProjectListItem({ image, name, about, link, phase }) {
  return (
    <div className='item'>
        <div>
            <img src={image} alt='project'/>
            <button style={{backgroundColor: 'white'}}>{FaBeer}</button>
        </div>
        <div>
            <h1>{name}</h1>
            <h4>{about}</h4>
            <a href={link}>Link</a>
        </div>
        <div>
            <h1>{phase}</h1>
        </div>
    </div>
  )
}

export default ProjectListItem;