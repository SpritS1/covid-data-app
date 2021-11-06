import { useState } from 'react';
import './SortOption.scss';

const SortOption = ({optionName = 'New cases', isActive = false}) => {
    const [sortMode, setSortMode] = useState('desc')

    return ( 
        <li className={`sort-option ${isActive ? 'active' : ''} ${isActive && sortMode === 'desc' ? 'desc' : ''}`}>{ optionName }</li>
     );
}
 
export default SortOption;