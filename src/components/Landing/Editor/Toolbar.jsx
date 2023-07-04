import React from 'react';
import Icon from '../../Icon'
import './Editor.scss'

function Tool(props) {
    const { iconType, color, size = '25px', isActive } = props
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
            iconType: 'assignment_turned_in'
        },
        {
            tool: 'experience',
            iconType: 'timeline'
        },
        {
            tool: 'skills',
            iconType: 'javascript',
            size: '45px'
        },
    ]
    return (
        <div className='toolbar'>
            {tools.map((x) =>
                <Tool
                    iconType={x.iconType}
                    color={activeTool === x.tool ? 'white' : 'grey'}
                    size={x?.size}
                    isActive={activeTool === x.tool}
                />)}
        </div>
    );
}

export default Toolbar;
