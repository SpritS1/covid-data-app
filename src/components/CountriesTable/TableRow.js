import './TableRow.scss';

const TableRow = () => {
    return ( 
        <tr className='table-tr'>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper--first">
                    <span className='table-tr__td-name'>Country:</span>
                    <span className='table-tr__td-value'>United States</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>Cases:</span>
                    <span className='table-tr__td-value'>12,342</span>
                </div>
            </td>
            <td className='table-tr__td'>
                <div className="table-tr__td-wrapper">
                    <span className='table-tr__td-name'>Deaths:</span>
                    <span className='table-tr__td-value'>2934</span>
                </div>
            </td>
        </tr>
     );
}
 
export default TableRow;