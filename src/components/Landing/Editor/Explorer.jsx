import React from 'react';
import Icon from '../../Icon';
import './Editor.scss';

function Explorer() {
  return (
    <div className="explorer">
      <p className="title">Explorer</p>
      <div className="projects">
        <Icon icon="arrow_forward_ios" color="#BBB" size="10px" />
        Projects
      </div>
      <div className="project 1">Animenow</div>
    </div>
  );
}

export default Explorer;
