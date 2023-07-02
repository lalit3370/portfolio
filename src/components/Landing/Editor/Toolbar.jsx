import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './Editor.scss'

function Toolbar() {
    return (
        <div className='toolbar'>
            <div className='tool'>
            <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "#828282",}} />
            {/* <FontAwesomeIcon icon="fa-regular fa-files" style={{color: "#828282",}} /> */}
            </div>
        </div>
    );
}

export default Toolbar;
