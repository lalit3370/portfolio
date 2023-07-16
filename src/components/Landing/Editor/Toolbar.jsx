import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import './Editor.scss';

function Tool(props) {
  const { iconType, color, size = '25px', isActive } = props;
  return (
    <div className={`tool ${isActive ? 'active' : ''}`}>
      <Icon icon={iconType} color={color} size={size} />
    </div>
  );
}

function Toolbar({ activeTool }) {
  const tools = [
    {
      tool: 'projects',
      iconType: 'assignment_turned_in',
    },
    {
      tool: 'experience',
      iconType: 'timeline',
    },
    {
      tool: 'skills',
      iconType: 'javascript',
      size: '45px',
    },
  ];
  return (
    <div className="toolbar">
      {tools.map((x, y) => (
        <Tool
          iconType={x.iconType}
          color={activeTool === x.tool ? '#FFF' : '#BBB'}
          size={x?.size}
          isActive={activeTool === x.tool}
          key={y}
        />
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  activeTool: PropTypes.string,
};

Tool.propTypes = {
  iconType: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Toolbar;
