import TableRow from './TableRow';
import './CountriesTable.scss';

const CountriesTable = ({ countriesData }) => {

    return ( 
        <table className="countries-table" >
            <thead className='countries-table__thead'>
                <tr>
                    <th colSpan={3} className='countries-table__th'>Cases and deaths by country</th>
                </tr>
            </thead>
            <tbody className='countries-table__tbody'>
                {countriesData && countriesData.map((countryData) => <TableRow countryData={countryData} key={countryData.CountryCode}/>)}
            </tbody>
        </table>
     );
}
 
export default CountriesTable;