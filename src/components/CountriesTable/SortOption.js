import { useEffect, useState } from 'react';
import './SortOption.scss';
import sortData from '../../scripts/sortData';

const SortOption = ({
    optionName = 'New cases',
    columnName,
    sortedColumn,
    setSortedColumn,
    sortedCountriesData,
    setSortedCountriesData,
}) => {
    const [sortMode, setSortMode] = useState('desc');

    // If other column is sorted set sortMode to default desc value
    useEffect(() => {
        if (sortedColumn !== columnName) {
            setSortMode('desc');
        }
    }, [sortedColumn, columnName]);

    const handleClick = () => {
        if (columnName === sortedColumn) {
            sortMode === 'desc' ? setSortMode('asc') : setSortMode('desc');
            setSortedCountriesData(
                sortData(
                    columnName,
                    sortedCountriesData,
                    sortMode === 'asc' ? 'desc' : 'asc',
                ),
            );
        } else if (columnName !== sortedColumn) {
            setSortedColumn(columnName);
            setSortedCountriesData(
                sortData(
                    columnName,
                    sortedCountriesData,
                    sortMode === 'asc' ? 'asc' : 'desc',
                ),
            );
        }
    };

    return (
        <li
            className={`sort-option ${
                sortedColumn === columnName ? 'active' : ''
            } ${sortMode === 'asc' ? 'asc' : 'desc'}`}
            onClick={() => handleClick()}
        >
            {optionName}
        </li>
    );
};

export default SortOption;
