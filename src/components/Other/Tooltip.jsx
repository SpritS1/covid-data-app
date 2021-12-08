import React from 'react';
import './Tooltip.scss';

const Tooltip = (props) => {
    return <div className="tooltip">{props.content}</div>;
};

export default Tooltip;
