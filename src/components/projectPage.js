import React from 'react';
import ProjectCard from './Project'

import projects from '../projects.json'

const Project = () => {
    return (
        <>
        <div className="row">
            {projects.map((data) => <ProjectCard key={data.id}
            image={data.image}
            alt={data.alt}
            title={data.title}
            description ={data.description}
            repo={data.repo}
            deployed={data.deployed}/>)}
          </div> 

        </>
    )
}

export default Project; 