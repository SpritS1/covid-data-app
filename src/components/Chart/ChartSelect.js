import { useEffect, useRef, useState } from 'react';
import './ChartSelect.scss';

const ChartOption = ({options, currentOption, setCurrentOption}) => {
    const [isOptionActive, setIsOptionActive] = useState(false);
    const dropdownRef = useRef();

    // close dropdown when clicked outside
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isOptionActive && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOptionActive(false);
            }
        }

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        }
    }, [isOptionActive])

    const handleOptionSelect = (value) => {
        setCurrentOption(value);
        setIsOptionActive(false);
    }

    return ( 
        <div className="chart-option" onClick={(e) => !isOptionActive && setIsOptionActive(true)}>
            {currentOption}
            {isOptionActive && (
                <ul className='chart-option__dropdown' ref={dropdownRef}>
                    {options && options.map(({ value, name }) => {
                        return <li className='chart-option__option' onClick={() => handleOptionSelect(value)} key={value}>{ name }</li>
                    })}
                </ul>
            )}
        </div>
     );
}
 
export default ChartOption;