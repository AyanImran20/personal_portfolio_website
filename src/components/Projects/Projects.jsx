import React from 'react'
import Accordian from './Accordian'
import data from '/src/data/projects/projects.json'

const Projects = () => {
  return (
    <div className='flex flex-col justify-start gap-3 items-stretch px-5 lg:px-[100px] text-matte'>
      <h1 className="font-extrabold text-4xl text-matte">My Projects</h1>
      {
        data.map((project, idx) => {
          return (
            <Accordian key={idx} data={project}/>
          );
        })
      }
    </div>
  )
}

export default Projects
