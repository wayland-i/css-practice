import React from 'react'
import ProjectListItem from './ProjectListItem'

function ProjectList({ projects }) {
    
    const renderProjects = (projects) => {
        return projects.map(project => (
            <ProjectListItem
            key={project.id} 
            {...project}
            />
        ))
    }
  
    return (
        <div>
            <ul>{renderProjects(projects)}</ul>
        </div>
  )
}

export default ProjectList;