import './SortBy.scss';
import SortOption from './SortOption';
import { useState } from 'react';

const SortBy = ({ sortedCountriesData, setSortedCountriesData }) => {
    const [sortedColumn, setSortedColumn] = useState('confirmed_daily');

    return ( 
        <ul className="sort-by">
            <li className="sort-by__text">Sort by:</li> 
            <SortOption 
                optionName='New cases' 
                sortedColumn={sortedColumn} 
                setSortedColumn={setSortedColumn} 
                sortingName='confirmed_daily' 
                sortedCountriesData={sortedCountriesData} 
                setSortedCountriesData={setSortedCountriesData}
            />
            <SortOption 
                optionName='Cases'
                sortedColumn={sortedColumn}
                setSortedColumn={setSortedColumn}
                sortingName='confirmed'
                sortedCountriesData={sortedCountriesData}
                setSortedCountriesData={setSortedCountriesData}
            />
            <SortOption 
                optionName='New deaths' 
                sortedColumn={sortedColumn} 
                setSortedColumn={setSortedColumn} 
                sortingName='deaths_daily' 
                sortedCountriesData={sortedCountriesData} 
                setSortedCountriesData={setSortedCountriesData}
            />
            <SortOption 
                optionName='Deaths' 
                sortedColumn={sortedColumn} 
                setSortedColumn={setSortedColumn} 
                sortingName='deaths' 
                sortedCountriesData={sortedCountriesData} 
                setSortedCountriesData={setSortedCountriesData}
            />
        </ul>
     );
}
 
export default SortBy;