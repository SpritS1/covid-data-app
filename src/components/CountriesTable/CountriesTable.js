import TableRow from './TableRow';
import './CountriesTable.scss';
import { useEffect, useState } from 'react';

const CountriesTable = ({ countriesData }) => {
    // const [sortedCountriesData, setSortedCountriesData] = useState([]);

    // const sortData = (sortedElement, data) => {
    //     const newDataArray = data.concat();

    //     const sortedData = newDataArray.sort((a, b) => {
    //         return b[sortedElement] - a[sortedElement];
    //     })

    //     return sortedData;
    // }
    
    // useEffect(() => {
    //     if (countriesData) {
    //         setSortedCountriesData(sortData('NewConfirmed', countriesData));
    //     }
    // }, [countriesData])

    return ( 
        <table className="countries-table" >
            <thead className='countries-table__thead'>
                <tr>
                    <th colSpan={3} className='countries-table__th'>Cases and deaths by country</th>
                </tr>
            </thead>
            <tbody className='countries-table__tbody'>
                {countriesData && countriesData.map((countryData) => {
                    if (countryData.confirmed && countryData.deaths) {
                        return <TableRow countryData={countryData} key={countryData.combined_name}/>
                    }
                }
                )}
            </tbody>
        </table>
     );
}
 
export default CountriesTable;