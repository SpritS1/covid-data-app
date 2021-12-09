import { useEffect } from 'react';
import './Tooltip.scss';
import useMousePosition from 'hooks/useMousePosition';

const Tooltip = (props) => {
    const mousePosition = useMousePosition();

    const style = {
        top: mousePosition.y - 35,
        left: mousePosition.x - 20,
    };

    // useEffect(() => {
    //     console.log(mousePosition);
    // }, [mousePosition]);

    return (
        <div className="tooltip" style={style}>
            {props.content}
        </div>
    );
};

export default Tooltip;
