import TableRow from './TableRow';
import SortBy from './SortBy';
import './CountriesTable.scss';
import { useState } from 'react';
import sortData from '../../scripts/sortData';

const CountriesTable = ({ countriesData }) => {
    const [sortedCountriesData, setSortedCountriesData] = useState(() => sortData('confirmed_daily', countriesData, 'desc'));

    return ( 
        <table className="countries-table" >
            <thead className='countries-table__thead'>
                <tr className='countries-table__tr'>
                    <th className='countries-table__title'>Cases and deaths by country</th>
                    <SortBy sortedCountriesData={sortedCountriesData} setSortedCountriesData={setSortedCountriesData}/>
                </tr>
            </thead>
            <tbody className='countries-table__tbody'>
                {sortedCountriesData && sortedCountriesData.map((countryData) => {
                    if (countryData.confirmed && countryData.deaths && countryData.country_iso2s.length) {
                        return <TableRow countryData={countryData} key={countryData.country}/>
                    } else return null;
                }
                )}
            </tbody>
        </table>
     );
}
 
export default CountriesTable;