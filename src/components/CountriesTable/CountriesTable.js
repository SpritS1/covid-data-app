import TableRow from './TableRow';
import './CountriesTable.scss';

const CountriesTable = () => {
    return ( 
        <table className="countries-table" >
            <thead>
                <th colSpan={3} className='countries-table__th'>Cases and deaths by country</th>
            </thead>
            {/* <tbody> */}
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            {/* </tbody> */}
        </table>
     );
}
 
export default CountriesTable;