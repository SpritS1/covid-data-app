import './TableRow.scss';

const TableRow = ({countryData}) => {
    return ( 
        <tr className='table-tr'>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper--first">
                    <span className='table-tr__td-name'>Country:</span>
                    <span className='table-tr__td-value'>{ countryData.Country.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>New Cases:</span>
                    <span className='table-tr__td-value'>{countryData.NewConfirmed.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>Total Cases:</span>
                    <span className='table-tr__td-value'>{countryData.TotalConfirmed.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>New Deaths:</span>
                    <span className='table-tr__td-value'>{countryData.NewDeaths.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>Total Deaths:</span>
                    <span className='table-tr__td-value'>{countryData.TotalDeaths.toLocaleString() }</span>
                </div>
            </td>
        </tr>
     );
}
 
export default TableRow;