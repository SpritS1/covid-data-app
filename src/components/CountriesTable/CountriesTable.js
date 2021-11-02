import TableRow from './TableRow';
import './CountriesTable.scss';
import { useEffect, useState } from 'react';
import sortData from '../../scripts/sortData';

const CountriesTable = ({ countriesData }) => {
    const [sortedCountriesData, setSortedCountriesData] = useState(sortData('confirmed_daily', countriesData));

    return ( 
        <table className="countries-table" >
            <thead className='countries-table__thead'>
                <tr>
                    <th colSpan={3} className='countries-table__th'>Cases and deaths by country</th>
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