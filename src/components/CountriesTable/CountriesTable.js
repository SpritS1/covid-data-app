import TableRow from './TableRow';
import SortBy from './SortBy';
import './CountriesTable.scss';
import { useEffect, useState } from 'react';
import sortData from '../../scripts/sortData';

const CountriesTable = ({ countriesData }) => {
    const [sortedCountriesData, setSortedCountriesData] = useState(sortData('confirmed_daily', countriesData));

    return ( 
        <table className="countries-table" >
            <thead className='countries-table__thead'>
                <tr className='countries-table__tr'>
                    <th className='countries-table__title'>Cases and deaths by country</th>
                    <SortBy />
                    {/* <ul className="countries-table__sort-by">
                        <li className="countries-table__sort-text">Sort by:</li> 
                        <li className="countries-table__sort-option">New cases</li>
                        <li className="countries-table__sort-option">Cases</li>
                        <li className="countries-table__sort-option">New deaths</li>
                        <li className="countries-table__sort-option">Deaths</li>
                    </ul> */}
                </tr>
            </thead>
            <tbody className='countries-table__tbody'>
                {sortedCountriesData && sortedCountriesData.map((countryData) => {
                    if (countryData.confirmed && countryData.deaths && countryData.country_iso2s.length) {
                        return <TableRow countryData={countryData} key={countryData.country}/>
                    }
                }
                )}
            </tbody>
        </table>
     );
}
 
export default CountriesTable;