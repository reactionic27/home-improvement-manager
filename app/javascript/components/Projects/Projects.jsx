import React from 'react';

import { EffortCard } from '../EffortCard/EffortCard';

import '../../styles/custom.scss'

export function Projects(props) {
  const { projects, users } = props;
  return (
    <div className="projects-container">
      {projects.map((project, index) => {
        return (
          <div className="project-card" key={index}>
            <div className="card-header">
              <span className="title">{project.name}</span>
              <div className="status-button">
                {project.status}
              </div>
            </div>
            <div className="card-content">
              <div className="information">
                <div className="item">
                  <div className="comment">
                    Name:
                  </div>
                  <div className="name">
                    {users[0].name}
                  </div>
                </div>
                <div className="item">
                  <div className="date">
                    Created:
                  </div>
                  <div className="name">
                    12 days ago
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div className="description">
                  {project.description}
                </div>
                <EffortCard project={project} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
