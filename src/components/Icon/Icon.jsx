import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss'

function Icon(props) {
    const { icon, color } = props;
    return (
        <span className="icon material-symbols-outlined" style={{ color: color}}>
            {icon}
        </span>
    );
}

Icon.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string
}

export default Icon;
