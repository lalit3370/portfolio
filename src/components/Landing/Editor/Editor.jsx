import React from 'react';
import Toolbar from './Toolbar';
import Explorer from './Explorer';
import './Editor.scss';

function Editor() {
  return (
    <div className="container">
      <div className="titlebar">
        <div className="window_action_container">
          <div className="action close" />
          <div className="action minimise" />
          <div className="action resize" />
        </div>
      </div>
      <div className="body">
        <Toolbar activeTool="projects" />
        <Explorer />
        <div className="workspace"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Editor;
