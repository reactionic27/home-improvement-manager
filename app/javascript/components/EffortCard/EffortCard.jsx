import React from 'react';

export function EffortCard(props) {
  const { project } = props;
  return (
    <div className="effort">
      <div className="block">
        <div className="left">
          <div className="title">
            Estimated level of effort
          </div>
          <div className="level">
            {project.estimated_level}
          </div>
        </div>
        <div className="right">
          <div className="title">
            Actual level of effort
          </div>
          <div className="level">
            {project.actual_level}
          </div>
        </div>
      </div>
    </div>
  );
}
