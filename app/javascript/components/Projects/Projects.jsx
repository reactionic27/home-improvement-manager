import React from 'react';

import '../../styles/custom.scss'

export function Projects(props) {
  const { projects } = props;
  return (
    <div className="projects-container">
      {projects.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            {project.name}
          </div>
        )
      })}
    </div>
  );
}
