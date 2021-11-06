import { useEffect, useState } from 'react';
import './SortOption.scss';
import sortData from '../../scripts/sortData';

const SortOption = ({optionName = 'New cases', sortingName, sortedColumn, setSortedColumn, sortedCountriesData, setSortedCountriesData}) => {
    const [sortMode, setSortMode] = useState('asc');

    // If other column is sorted set sortMode to default desc value
    useEffect(() => {
        if (sortedColumn !== sortingName) {
            setSortMode('desc')
        }
    }, [sortedColumn, sortingName])

    const handleClick = () => {
        setSortedColumn(sortingName);
        setSortedCountriesData(sortData(sortingName, sortedCountriesData, sortMode));
        sortMode === 'desc' ? setSortMode('asc') : setSortMode('desc'); 
    }

    return ( 
        <li className={`sort-option ${sortedColumn === sortingName ? 'active' : ''} ${sortMode === 'asc' ? 'desc' : 'asc'}`} onClick={() => handleClick()}>{ optionName }</li>
     );
}
 
export default SortOption;