import React from 'react';
import Icon from '../../Icon'
import './Editor.scss'

function Toolbar() {
    return (
        <div className='toolbar'>
            <div className='tool'>
                <Icon icon='file_copy' color='white' />
            </div>
        </div>
    );
}

export default Toolbar;
