import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

function Icon(props) {
  const { icon, color, size } = props;
  return (
    <span
      className="icon material-symbols-outlined"
      style={{ color: color, fontSize: size }}
    >
      {icon}
    </span>
  );
}

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
