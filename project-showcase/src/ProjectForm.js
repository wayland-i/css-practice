import React from 'react'

function ProjectForm() {
  return (
    <div className='project-form'>
        <form>
            <h1>Add New Project</h1>
            <div>
                <label htmlFor='name'>Name</label>
                <textarea id='name'></textarea>
            </div>
            <div>
                <label htmlFor='about' type="text">About</label>
                <textarea id='about' style={{height: '6em'}}></textarea>
            </div>
            <div>
                <button style={{margin: '0px', marginTop: '10px'}}>Add Project</button>
            </div>
        </form>
    </div>
  )
}

export default ProjectForm