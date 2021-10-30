import './TableRow.scss';

const TableRow = ({countryData}) => {
    // console.log(countryData);
    
    return ( 
        <tr className='table-tr'>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper--first">
                    <span className='table-tr__td-name'>Country:</span>
                    <span className='table-tr__td-value'>{ countryData.combined_name }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>New Cases:</span>
                    <span className='table-tr__td-value'>{countryData.confirmed_daily.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>Total Cases:</span>
                    <span className='table-tr__td-value'>{countryData.confirmed.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>New Deaths:</span>
                    <span className='table-tr__td-value'>{countryData.deaths_daily.toLocaleString() }</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>Total Deaths:</span>
                    <span className='table-tr__td-value'>{countryData.deaths.toLocaleString() }</span>
                </div>
            </td>
        </tr>
     );
}
 
export default TableRow;