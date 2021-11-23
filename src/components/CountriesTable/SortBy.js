import './SortBy.scss';
import SortOption from './SortOption';
import { useEffect, useState } from 'react';

const SortBy = ({ countriesData, sortedCountriesData, setSortedCountriesData }) => {
    const [sortedColumn, setSortedColumn] = useState('confirmed_daily');

    useEffect(() => {
        setSortedColumn('confirmed_daily');
    }, [countriesData])

    return ( 
        <th className="sort-by">
            <ul className="sort-by__list">
                <li className="sort-by__text">Sort by:</li> 
                <SortOption 
                    optionName='New cases' 
                    sortedColumn={sortedColumn} 
                    setSortedColumn={setSortedColumn} 
                    columnName='confirmed_daily' 
                    sortedCountriesData={sortedCountriesData} 
                    setSortedCountriesData={setSortedCountriesData}
                />
                <SortOption 
                    optionName='Total Cases'
                    sortedColumn={sortedColumn}
                    setSortedColumn={setSortedColumn}
                    columnName='confirmed'
                    sortedCountriesData={sortedCountriesData}
                    setSortedCountriesData={setSortedCountriesData}
                />
                <SortOption 
                    optionName='New deaths' 
                    sortedColumn={sortedColumn} 
                    setSortedColumn={setSortedColumn} 
                    columnName='deaths_daily' 
                    sortedCountriesData={sortedCountriesData} 
                    setSortedCountriesData={setSortedCountriesData}
                />
                <SortOption 
                    optionName='Total Deaths' 
                    sortedColumn={sortedColumn} 
                    setSortedColumn={setSortedColumn} 
                    columnName='deaths' 
                    sortedCountriesData={sortedCountriesData} 
                    setSortedCountriesData={setSortedCountriesData}
                />
            </ul>
        </th>
     );
}
 
export default SortBy;